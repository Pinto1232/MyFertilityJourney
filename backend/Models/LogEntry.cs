using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class LogEntry
    {
        [Key]
        public int Id { get; set; }
        
        public DateTime Timestamp { get; set; }
        
        // Log Details
        [Required]
        public string LogType { get; set; } = string.Empty; // e.g., authentication, API, error, transaction
        
        [Required]
        public string Level { get; set; } = string.Empty;     // e.g., INFO, WARNING, ERROR
        
        [Required]
        public string Message { get; set; } = string.Empty;
        
        // Optional additional field
        public string UserId { get; set; } = string.Empty;
    }
}
