using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Models
{
    public class DataContext : DbContext
    {
        // Required for runtime
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        // Required for migrations
        protected DataContext() : base() { }

        public DbSet<User> Users { get; set; }
        public DbSet<Practice> Practices { get; set; }
        public DbSet<LogEntry> LogEntries { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Marking ProcedureDetails and Authorization as owned entities
            modelBuilder.Entity<LogEntry>().OwnsOne(e => e.ProcedureDetails);
            modelBuilder.Entity<LogEntry>().OwnsOne(e => e.Authorization);
        }
    }
}
