using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Practice
    {
        [Key]
        public int Id { get; set; }

        // General Practice Information
        [Required]
        public string Name { get; set; } = string.Empty;
        
        public string Description { get; set; } = string.Empty;
        
        public string Category { get; set; } = string.Empty;
        
        [Required]
        public string Status { get; set; } = string.Empty;

        // Practice Ownership & Management
        public int OwnerId { get; set; }
        
        public string OwnerName { get; set; } = string.Empty;
        
        // Location & Contact Details (Optional)
        public string PhoneNumber { get; set; } = string.Empty;
        
        public string Email { get; set; } = string.Empty;
        
        // For listing purposes
        public DateTime CreatedAt { get; set; }
    }
}
