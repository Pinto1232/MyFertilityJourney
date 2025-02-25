using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services
{
    public class AuthService
    {
        private readonly RequestDelegate _next;
        private readonly IConfiguration _configuration;

        public AuthService(RequestDelegate next, IConfiguration configuration)
        {
            _next = next;
            _configuration = configuration;
        }

        public async Task Invoke(HttpContext context)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            if (token != null)
                attachUserToContext(context, token);

            await _next(context);
        }

        private void attachUserToContext(HttpContext context, string token)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtKey = _configuration["Jwt:Key"];
                if (string.IsNullOrEmpty(jwtKey))
                {
                    throw new ArgumentNullException("Jwt:Key", "JWT key is not configured.");
                }
                var key = Encoding.ASCII.GetBytes(jwtKey);
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                var jwtToken = (JwtSecurityToken)validatedToken;
                var userId = int.Parse(jwtToken.Claims.First(x => x.Type == "id").Value);

                context.Items["User"] = userId;
            }
            catch (SecurityTokenException ex)
            {
                context.Response.StatusCode = 401;
                context.Response.WriteAsync(System.Text.Json.JsonSerializer.Serialize(new { message = "Invalid token", error = ex.Message }));
            }
            catch (Exception ex)
            {
                context.Response.StatusCode = 500;
                context.Response.WriteAsync(System.Text.Json.JsonSerializer.Serialize(new { message = "An error occurred while processing the token", error = ex.Message }));
            }
        }
    }
}
