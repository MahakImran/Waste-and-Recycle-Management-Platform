using Microsoft.EntityFrameworkCore;
using Waste_and_Recycle_Managemnet_Platform.Models;
namespace Waste_and_Recycle_Managemnet_Platform.Data

{
    public class RegistrationDbContext : DbContext
    {
        public RegistrationDbContext(DbContextOptions<RegistrationDbContext> options) : base(options)
        {

        }
        public DbSet<Registration> registrations { get; set; }
    }
}