using System;
using System.Collections.Generic;

namespace AlbaHoldingWebAPI.Models;

public partial class Alumno
{
    public int IdAlumno { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido { get; set; }

    public DateOnly? FechaNacimiento { get; set; }

    public virtual ICollection<Nota> Nota { get; set; } = new List<Nota>();
}
