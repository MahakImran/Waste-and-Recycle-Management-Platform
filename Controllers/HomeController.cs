using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Waste_and_Recycle_Managemnet_Platform.Models;

namespace Waste_and_Recycle_Managemnet_Platform.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
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
