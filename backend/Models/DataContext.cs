using Microsoft.EntityFrameworkCore;

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
    }
}
