using System;
using System.Collections.Generic;

namespace AlbaHoldingWebAPI.Models;

public partial class Nota
{
    public int IdNotas { get; set; }

    public int IdAsignatura { get; set; }

    public double Calificacion { get; set; }

    public DateOnly FechaExamen { get; set; }

    public int Convocatoria { get; set; }

    public int IdAlumno { get; set; }

    public virtual Alumno IdAlumnoNavigation { get; set; } = null!;

    public virtual Asignatura IdAsignaturaNavigation { get; set; } = null!;
}
