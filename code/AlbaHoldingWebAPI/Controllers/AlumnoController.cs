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
    public class AlumnoController : ControllerBase
    {
        private readonly DbcolegioContext _context;

        public AlumnoController(DbcolegioContext context)
        {
            _context = context;
        }

        // GET: api/Alumno
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Alumno>>> GetAlumnos()
        {
            return await _context.Alumnos.ToListAsync();
        }

        // GET: api/Alumno/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Alumno>> GetAlumno(int id)
        {
            var alumno = await _context.Alumnos.FindAsync(id);

            if (alumno == null)
            {
                return NotFound();
            }

            return alumno;
        }

        // PUT: api/Alumno/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        [HttpPut]
        public async Task<IActionResult> PutCiudadano(Alumno alumno)
        {
            bool result = await _context.Alumnos.AnyAsync(e => e.IdAlumno == alumno.IdAlumno);
            if (!result)
            {
                return BadRequest();
            }

            _context.Entry(alumno).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();
        }


        // POST: api/Alumno
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Alumno>> PostAlumno(Alumno alumno)
        {
                    
            try
            {
                _context.Alumnos.Add(alumno);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception)
            {
         
                throw;
            }
           

        }

     


        // DELETE: api/Alumno/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAlumno(int id)
        {
            var alumno = await _context.Alumnos.FindAsync(id);
            if (alumno == null)
            {
                return NotFound();
            }

            _context.Alumnos.Remove(alumno);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AlumnoExists(int id)
        {
            return _context.Alumnos.Any(e => e.IdAlumno == id);
        }
    }
}
