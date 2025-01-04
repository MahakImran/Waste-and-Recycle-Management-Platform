using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace Contact_form.Models
{
    public class Contact
    {
        [Key]
        public int id { get; set; }
        public string name {  get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string query { get; set; }
    }
}
