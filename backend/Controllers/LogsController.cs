using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LogsController : ControllerBase
    {
        private readonly DataContext _context;

        public LogsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/logs
        [HttpGet]
        public async Task<IActionResult> GetLogs()
        {
            var logs = await _context.LogEntries.ToListAsync();
            return Ok(logs);
        }

        // GET: api/logs/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetLog(int id)
        {
            var log = await _context.LogEntries.FindAsync(id);
            if (log == null)
                return NotFound();

            return Ok(log);
        }

        // POST: api/logs
        [HttpPost]
        public async Task<IActionResult> CreateLog(LogEntry log)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            log.Timestamp = DateTime.UtcNow;
            _context.LogEntries.Add(log);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLog), new { id = log.Id }, log);
        }
    }
}
