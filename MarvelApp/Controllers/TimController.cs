using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MarvelApp.Models;
using MarvelApp.Data;


namespace MarvelApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TimController : ControllerBase
    {
        private readonly ApiContext _context;

        public TimController(ApiContext context)
        {
            _context = context;
        }

        [HttpPost]
        public JsonResult CreateEdit(Tim tim)
        {
            if (tim.Id == 0)
            {
                _context.Timovi.Add(tim);
            }
            else
            {
                var timInDb = _context.Timovi.Find(tim.Id);

                if (timInDb == null)
                    return new JsonResult(NotFound());

                timInDb = tim;
            }

            _context.SaveChanges();

            return new JsonResult(Ok(tim));
        }

        [HttpGet]
        public JsonResult Get(int id)
        {
            var result = _context.Timovi.Find(id);

            if (result == null)
                return new JsonResult(NotFound());

            return new JsonResult(Ok(result));
        }

        [HttpDelete]
        public JsonResult Delete(int id)
        {
            var result = _context.Timovi.Find(id);

            if (result == null)
                return new JsonResult(NotFound());

            _context.Timovi.Remove(result);
            _context.SaveChanges();

            return new JsonResult(NoContent());
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            var result = _context.Timovi.ToList();

            return new JsonResult(Ok(result));
        }
    }
}
