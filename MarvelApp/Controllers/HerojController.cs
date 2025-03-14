using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MarvelApp.Models;
using MarvelApp.Data;


namespace MarvelApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HerojController : ControllerBase
    {
        private readonly ApiContext _context;

        public HerojController(ApiContext context)
        {
            _context = context;
        }

        [HttpPost]
        public JsonResult CreateEdit(Heroj heroj)
        {
            if (heroj.Id == 0)
            {
                _context.Heroji.Add(heroj);
            }
            else
            {
                var herojInDb = _context.Heroji.Find(heroj.Id);

                if (herojInDb == null)
                    return new JsonResult(NotFound());

                _context.Entry(herojInDb).CurrentValues.SetValues(heroj);
            }

            _context.SaveChanges();

            return new JsonResult(Ok(heroj));
        }

        [HttpGet]
        public JsonResult Get(int id)
        {
            var result = _context.Heroji.Find(id);

            if (result == null)
                return new JsonResult(NotFound());

            return new JsonResult(Ok(result));
        }

        [HttpDelete]
        public JsonResult Delete(int id)
        {
            var result = _context.Heroji.Find(id);

            if (result == null)
                return new JsonResult(NotFound());

            _context.Heroji.Remove(result);
            _context.SaveChanges();

            return new JsonResult(NoContent());
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            var result = _context.Heroji.ToList();

            return new JsonResult(Ok(result));
        }
    }
}
