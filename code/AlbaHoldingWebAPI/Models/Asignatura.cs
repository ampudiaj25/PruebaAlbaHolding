using System;
using System.Collections.Generic;

namespace AlbaHoldingWebAPI.Models;

public partial class Asignatura
{
    public int IdAsignatura { get; set; }

    public string Nombre { get; set; } = null!;

    public virtual ICollection<Nota> Nota { get; set; } = new List<Nota>();
}
