using Microsoft.EntityFrameworkCore;
using MarvelApp.Models;

namespace MarvelApp.Data
{
    public class ApiContext : DbContext   
    {
        public DbSet<Identitet> Identiteti { get; set; }
        public DbSet<Heroj> Heroji { get; set; }
        public DbSet<Tim> Timovi { get; set; }
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {

        }
        
    }
}
