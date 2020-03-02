using AppPersistence.Models;
using Microsoft.EntityFrameworkCore;

namespace AppPersistence
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Craftsman> craftsmen;
        public DbSet<Tool> tools;
        public DbSet<Toolbox> toolboxes;

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
