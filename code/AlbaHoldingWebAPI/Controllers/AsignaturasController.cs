using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AlbaHoldingWebAPI.Models;
using Microsoft.AspNetCore.Http.HttpResults;

namespace AlbaHoldingWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AsignaturasController : ControllerBase
    {
        private readonly DbcolegioContext _context;

        public AsignaturasController(DbcolegioContext context)
        {
            _context = context;
        }

        // GET: api/Asignaturas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Asignatura>>> GetAsignaturas()
        {
            return await _context.Asignaturas.ToListAsync();
        }

        // GET: api/Asignaturas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Asignatura>> GetAsignatura(int id)
        {
            var asignatura = await _context.Asignaturas.FindAsync(id);

            if (asignatura == null)
            {
                return NotFound();
            }

            return asignatura;
        }

        // PUT: api/Asignaturas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutCiudadano(Asignatura asignatura)
        {
            bool result = await _context.Asignaturas.AnyAsync(e => e.IdAsignatura == asignatura.IdAsignatura);
            if (!result)
            {
                return BadRequest();
            }

            _context.Entry(asignatura).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();
        }

        // POST: api/Asignaturas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Asignatura>> PostAsignatura(Asignatura asignatura)
        {

            try
            {
                _context.Asignaturas.Add(asignatura);
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }

        // DELETE: api/Asignaturas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsignatura(int id)
        {
            var asignatura = await _context.Asignaturas.FindAsync(id);
            if (asignatura == null)
            {
                return NotFound();
            }

            _context.Asignaturas.Remove(asignatura);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AsignaturaExists(int id)
        {
            return _context.Asignaturas.Any(e => e.IdAsignatura == id);
        }
    }
}
