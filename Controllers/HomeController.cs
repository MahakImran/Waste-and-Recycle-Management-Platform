using Contact_form.Data;
using Contact_form.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Contact_form.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly ContactDbcontext _contactDbcontext;

        public HomeController(ILogger<HomeController> logger, ContactDbcontext contactDbcontext)
        {
            _logger = logger;
            _contactDbcontext = contactDbcontext;
        }

        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Contact(Contact contact)
        {
            if (string.IsNullOrEmpty(contact.name) || string.IsNullOrEmpty(contact.Email) || string.IsNullOrEmpty(contact.Phone) || string.IsNullOrEmpty(contact.query))
            {
                ViewBag.Message = "Form not Submitted! Please fill in all fields.";
            }
            else
            {
                _contactDbcontext.Add(contact);
                _contactDbcontext.SaveChanges();
                ViewBag.Message = "Form Submitted";
            }
            return View("Index");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
