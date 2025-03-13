using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MarvelApp.Models;
using MarvelApp.Data;

namespace MarvelApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class IdentitetController : ControllerBase
    {
        private readonly ApiContext _context;

        public IdentitetController(ApiContext context)
        {
            _context = context;
        }

        [HttpPost]
        public JsonResult CreateEdit(Identitet identitet)
        {
            if (identitet.Id == 0)
            {
                _context.Identiteti.Add(identitet);

            } else
            {
                var identitetInDb = _context.Identiteti.Find(identitet.Id);

                if (identitetInDb == null)
                    return new JsonResult(NotFound());

                identitetInDb = identitet;
            }
            _context.SaveChanges();

            return new JsonResult(Ok(identitet));
        }

        [HttpGet]
        public JsonResult Get(int id)
        {
            var result = _context.Identiteti.Find(id);

            if (result == null)
                return new JsonResult(NotFound());

            return new JsonResult(Ok(result));
        }

        [HttpDelete]
        public JsonResult Delete(int id)
        {
            var result = _context.Identiteti.Find(id);

            if (result == null)
                return new JsonResult(NotFound());

            _context.Identiteti.Remove(result);
            _context.SaveChanges();

            return new JsonResult(NoContent());
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            var result = _context.Identiteti.ToList();

            return new JsonResult(Ok(result));
        }
    }
}
