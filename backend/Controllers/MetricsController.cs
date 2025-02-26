using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MetricsController : ControllerBase
    {
        private readonly DataContext _context;

        public MetricsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/metrics
        [HttpGet]
        public async Task<IActionResult> GetMetrics()
        {
            var totalUsers = await _context.Users.CountAsync();
            var totalPractices = await _context.Practices.CountAsync();
            var totalLogs = await _context.LogEntries.CountAsync();

            // Additional dummy metrics (update as needed)
            int totalTreatments = 0;
            int totalConsents = 0;
            int totalConsentsSigned = 0;
            int totalFactSheetsRead = 0;
            int pendingPractices = await _context.Practices.CountAsync(p => p.Status.ToLower() == "pending");
            int postTreatment = 0;

            return Ok(new
            {
                totalUsers,
                totalPractices,
                totalLogs,
                totalTreatments,
                totalConsents,
                totalConsentsSigned,
                totalFactSheetsRead,
                pendingPractices,
                postTreatment
            });
        }
    }
}
