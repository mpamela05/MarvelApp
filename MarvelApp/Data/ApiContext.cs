using Microsoft.EntityFrameworkCore;
using MarvelApp.Models;

namespace MarvelApp.Data
{
    public class ApiContext : DbContext   
    {
        public IConfiguration _config { get; set; }

        public ApiContext(IConfiguration config)
        {
            _config = config;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_config.GetConnectionString("DatabaseConnection"));
        }
        public DbSet<Identitet> Identiteti { get; set; }
        public DbSet<Heroj> Heroji { get; set; }
        public DbSet<Tim> Timovi { get; set; }
    }
}
