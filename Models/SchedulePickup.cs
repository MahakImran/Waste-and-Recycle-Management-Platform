using System.ComponentModel.DataAnnotations;

namespace Waste_and_Recycle_Managemnet_Platform.Models
{
    public class SchedulePickup
    {
        [Key]
        public int id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Pickupdate { get; set; }

        public string waste_type { get; set; }

        public string Message { get; set; }
    }
}
