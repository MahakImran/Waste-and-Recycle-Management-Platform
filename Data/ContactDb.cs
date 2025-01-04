using Microsoft.EntityFrameworkCore;
using Contact_form.Models;

namespace Contact_form.Data
{
    public class ContactDbcontext : DbContext
    {
        public ContactDbcontext(DbContextOptions<ContactDbcontext> options) : base(options)
        {

        }
        public DbSet<Contact> Contacts { get; set; }
    }
}
