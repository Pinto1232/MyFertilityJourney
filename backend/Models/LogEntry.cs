using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class LogEntry
    {
        [Key]
        public int Id { get; set; }

        public DateTime Timestamp { get; set; }

        // Log Details
        [Required]
        public string LogType { get; set; } = string.Empty;

        [Required]
        public string Level { get; set; } = string.Empty;

        [Required]
        public string Message { get; set; } = string.Empty;

        // Optional additional fields
        public string UserId { get; set; } = string.Empty;
        public string PatientId { get; set; } = string.Empty;
        public string Department { get; set; } = string.Empty;

        [Required]
        public ProcedureDetails ProcedureDetails { get; set; } = new ProcedureDetails();

        public string Outcome { get; set; } = string.Empty;

        [Required]
        public Authorization Authorization { get; set; } = new Authorization();
    }

    [Owned]
    public class ProcedureDetails
    {
        public string Type { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Notes { get; set; } = string.Empty;
    }

    [Owned]
    public class Authorization
    {
        public bool ConsentProvided { get; set; }
        public string AuthorizedBy { get; set; } = string.Empty;
    }
}
