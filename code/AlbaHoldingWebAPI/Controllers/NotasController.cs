using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AlbaHoldingWebAPI.Models;

namespace AlbaHoldingWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotasController : ControllerBase
    {
        private readonly DbcolegioContext _context;

        public NotasController(DbcolegioContext context)
        {
            _context = context;
        }

        // GET: api/Notas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Nota>>> GetNotas()
        {
            return await _context.Notas.ToListAsync();
        }

        // GET: api/Notas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Nota>> GetNota(int id)
        {
            var nota = await _context.Notas.FindAsync(id);

            if (nota == null)
            {
                return NotFound();
            }

            return nota;
        }

        // PUT: api/Notas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutCiudadano(Nota nota)
        {
            bool result = await _context.Notas.AnyAsync(e => e.IdNotas == nota.IdNotas);
            if (!result)
            {
                return BadRequest();
            }

            _context.Entry(nota).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();
        }

        // POST: api/Notas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Nota>> PostNota(Nota nota)
        {
            
            try
            {
                _context.Notas.Add(nota);
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception)
            {
               throw;
             }
     
        }

        // DELETE: api/Notas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNota(int id)
        {
            var nota = await _context.Notas.FindAsync(id);
            if (nota == null)
            {
                return NotFound();
            }

            _context.Notas.Remove(nota);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NotaExists(int id)
        {
            return _context.Notas.Any(e => e.IdNotas == id);
        }
    }
}
