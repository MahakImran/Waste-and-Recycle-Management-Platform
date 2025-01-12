using Microsoft.EntityFrameworkCore;
using Waste_and_Recycle_Managemnet_Platform.Models;

namespace Waste_and_Recycle_Managemnet_Platform.Data
{
    public class SchedulepickupDbContext : DbContext
    {
        public SchedulepickupDbContext(DbContextOptions<SchedulepickupDbContext> options) : base (options)
        {

        }
        public DbSet<SchedulePickup> schedulePickups { get; set; }
    }
}
