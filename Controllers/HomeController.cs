using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Diagnostics;
using System.Security.Claims;
using Waste_and_Recycle_Managemnet_Platform.Data;
using Waste_and_Recycle_Managemnet_Platform.Models;
using Microsoft.CodeAnalysis.Scripting;
using BCrypt.Net;


namespace Waste_and_Recycle_Managemnet_Platform.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly SchedulepickupDbContext _schedulepickupDbContext;
        private readonly RegistrationDbContext _registrationDbContext;

        public HomeController(ILogger<HomeController> logger, SchedulepickupDbContext schedulepickupDbContext, RegistrationDbContext registrationDbContext)
        {
            _logger = logger;
            _schedulepickupDbContext = schedulepickupDbContext;
            _registrationDbContext = registrationDbContext;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Issue()
        {
            return View();
        }
        public IActionResult Issue2()
        {
            return View();
        }

        public IActionResult Issue3()
        {
            return View();
        }

        public IActionResult Issue4()
        {
            return View();
        }

        public IActionResult Issue5()
        {
            return View();
        }

        public IActionResult Issue6()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }
        public IActionResult Profile()
        {
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult SchedulePickup(SchedulePickup schedulePickup)
        {
            if (string.IsNullOrEmpty(schedulePickup.Name) || (string.IsNullOrEmpty(schedulePickup.Address) || string.IsNullOrEmpty(schedulePickup.Email) || string.IsNullOrEmpty(schedulePickup.Phone) || string.IsNullOrEmpty(schedulePickup.Pickupdate)) || (string.IsNullOrEmpty(schedulePickup.waste_type) || (string.IsNullOrEmpty(schedulePickup.Message))))
            {
                ViewBag.formoneMessage = " Please fill in all fields.";
            }
            else
            {
                _schedulepickupDbContext.Add(schedulePickup);
                _schedulepickupDbContext.SaveChanges();
                ViewBag.formoneMessage = "Form Submitted";
            }
            return View("Index");
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Registration(Registration registration)
        {
            if (string.IsNullOrEmpty(registration.name) || string.IsNullOrEmpty(registration.email) ||
                string.IsNullOrEmpty(registration.password) || string.IsNullOrEmpty(registration.confirmpassword))
            {
                ViewBag.formtwoMessage = "Registration Unsuccessful! Please fill in all fields.";
                
            }
            else if (registration.confirmpassword != registration.password)
            {
                ViewBag.formtwoMessage = "Registration Unsuccessful! Confirm Password and Password do not match.";
            }
            else
            {
                // Hash the password before storing it
                registration.password = BCrypt.Net.BCrypt.HashPassword(registration.password);
                _registrationDbContext.Add(registration);
                _registrationDbContext.SaveChanges();
                ViewBag.formtwoMessage = "Registration Successful!";
            }
            return View("Index");
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Log_in(string email, string password)
        {
            // Check if the user exists in the database
            var user = _registrationDbContext.registrations.FirstOrDefault(r => r.email == email);

            if (user == null)
            {
                ViewBag.form3Message = "User does not exist.";
                return View("Login"); // Return back to login page with error message
            }

            // Check if the entered password matches the stored hashed password
            var isPasswordValid = BCrypt.Net.BCrypt.Verify(password, user.password);
            if (!isPasswordValid)
            {
                ViewBag.form3Message = "Invalid password.";
                return View("Login"); // Return back to login page with error message
            }

            // If credentials are correct
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
