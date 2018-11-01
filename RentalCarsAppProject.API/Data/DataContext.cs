using Microsoft.EntityFrameworkCore;

using RentalCarsAppProject.API.Models;

namespace RentalCarsAppProject.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        public DbSet<Value> Values { get; set; }     
        public DbSet<Users> Users { get; set; } 
        public DbSet<Photo> Photos { get; set; }         
    }
}
