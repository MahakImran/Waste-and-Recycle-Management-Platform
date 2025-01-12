using System.ComponentModel.DataAnnotations;


namespace Waste_and_Recycle_Managemnet_Platform.Models
{
    public class Registration
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string confirmpassword { get; set; }

    }
}
