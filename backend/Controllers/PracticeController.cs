using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PracticeController : ControllerBase
    {
        private readonly DataContext _context;

        public PracticeController(DataContext context)
        {
            _context = context;
        }

        // GET: api/practice
        [HttpGet]
        public async Task<IActionResult> GetPractices()
        {
            var practices = await _context.Practices.ToListAsync();
            return Ok(practices);
        }

        // GET: api/practice/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPractice(int id)
        {
            var practice = await _context.Practices.FindAsync(id);
            if (practice == null)
                return NotFound();

            return Ok(practice);
        }

        // POST: api/practice
        [HttpPost]
        public async Task<IActionResult> CreatePractice(Practice practice)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            practice.CreatedAt = DateTime.UtcNow;
            _context.Practices.Add(practice);
            await _context.SaveChangesAsync();

            // Ensure the correct action is referenced by specifying GetPractice in this controller.
            return CreatedAtAction(nameof(GetPractice), new { id = practice.Id }, practice);
        }
    }
}
