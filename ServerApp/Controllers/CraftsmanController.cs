using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ServerApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CraftsmanController : ControllerBase
    {
        private readonly SecondFrontEndContext _context;
        private readonly IHttpClientFactory _clientFactory;
        private readonly HttpClient client;

        public CraftsmanController(SecondFrontEndContext context, IHttpClientFactory clientFactory)
        {
            _context = context;
            _clientFactory = clientFactory;
            client = _clientFactory.CreateClient("backend");       
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
        }
    }
}
