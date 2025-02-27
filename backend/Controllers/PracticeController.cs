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
        // PUT: api/practice/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePractice(int id, Practice practice)
        {
            if (id != practice.Id)
                return BadRequest("ID mismatch.");

            var existingPractice = await _context.Practices.FindAsync(id);
            if (existingPractice == null)
                return NotFound();

            // Update properties as needed. For example:
            existingPractice.Name = practice.Name;
            existingPractice.Description = practice.Description;
            existingPractice.Category = practice.Category;
            existingPractice.Status = practice.Status;
            existingPractice.OwnerId = practice.OwnerId;
            existingPractice.OwnerName = practice.OwnerName;
            existingPractice.PhoneNumber = practice.PhoneNumber;
            existingPractice.Email = practice.Email;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Practices.Any(e => e.Id == id))
                    return NotFound();
                throw;
            }

            return NoContent();
        }

    }
}
