using AppPersistence.Models;
using Microsoft.EntityFrameworkCore;

namespace AppPersistence
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Craftsman> Craftsmen { get; set; }
        public DbSet<Tool> Tools { get; set; }
        public DbSet<Toolbox> Toolboxes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Craftsman>()
                .HasMany(cf => cf.Toolboxes)
                .WithOne(tb => tb.Owner)
                .HasForeignKey(t => t.OwnerId);

            modelBuilder.Entity<Toolbox>()
                .HasMany(tb => tb.Tools)
                .WithOne(t => t.Toolbox)
                .HasForeignKey(t => t.ToolboxId);
        }
    }
}
