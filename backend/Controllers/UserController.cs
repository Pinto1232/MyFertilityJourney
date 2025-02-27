using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using backend.Models;
using backend.Services;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly AuthService _authService;

        public UserController(DataContext context, AuthService authService)
        {
            _context = context;
            _authService = authService;
        }

        // POST: api/user/register
        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (await _context.Users.AnyAsync(u => u.Email == user.Email))
                return BadRequest(new { message = "Email is already taken" });

            // Ensure the Id is not set manually
            user.Id = 0;

            // Hash the password before saving
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User registered successfully" });
        }

        // POST: api/user/login
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == request.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.Password))
                return Unauthorized(new { message = "Invalid credentials" });

            var token = _authService.GenerateJwtToken(user.Id.ToString(), user.Email, "User");
            return Ok(new { token });
        }

        // GET: api/user/profile
        [HttpGet("profile")]
        [Authorize]
        public async Task<IActionResult> GetUserProfile()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null)
                return Unauthorized(new { message = "Invalid token claims" });

            var user = await _context.Users.FindAsync(int.Parse(userId));
            if (user == null)
                return NotFound(new { message = "User not found" });

            return Ok(new 
            { 
                user.Id, 
                user.Email, 
                user.Name, 
                user.PhoneNumber, 
                user.Address 
            });
        }

        // PUT: api/user/profile/{id}
        [HttpPut("profile/{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateUserProfile(int id, User updatedUser)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null || id != int.Parse(userId))
                return Unauthorized(new { message = "Invalid token claims or user ID mismatch" });

            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return NotFound(new { message = "User not found" });

            user.Name = updatedUser.Name;
            user.PhoneNumber = updatedUser.PhoneNumber;
            user.Address = updatedUser.Address;

            _context.Users.Update(user);
            await _context.SaveChangesAsync();

            return Ok(new 
            { 
                user.Id, 
                user.Email, 
                user.Name, 
                user.PhoneNumber, 
                user.Address 
            });
        }
    }

    public class LoginRequest
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}
