using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AlbaHoldingWebAPI.Models;

public partial class DbcolegioContext : DbContext
{
    public DbcolegioContext()
    {
    }

    public DbcolegioContext(DbContextOptions<DbcolegioContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Alumno> Alumnos { get; set; }

    public virtual DbSet<Asignatura> Asignaturas { get; set; }

    public virtual DbSet<Nota> Notas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-T5EA3L8;Database=DBColegio;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Alumno>(entity =>
        {
            entity.HasKey(e => e.IdAlumno).HasName("PK__alumnos__43FBBAC7C81CF93D");

            entity.ToTable("alumnos");

            entity.Property(e => e.IdAlumno)
                .ValueGeneratedNever()
                .HasColumnName("idAlumno");
            entity.Property(e => e.Apellido)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasColumnName("apellido");
            entity.Property(e => e.FechaNacimiento).HasColumnName("fecha_nacimiento");
            entity.Property(e => e.Nombre)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        modelBuilder.Entity<Asignatura>(entity =>
        {
            entity.HasKey(e => e.IdAsignatura).HasName("PK__asignatu__DD251214DCB87C0B");

            entity.ToTable("asignaturas");

            entity.Property(e => e.IdAsignatura)
                .ValueGeneratedNever()
                .HasColumnName("idAsignatura");
            entity.Property(e => e.Nombre)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        modelBuilder.Entity<Nota>(entity =>
        {
            entity.HasKey(e => e.IdNotas).HasName("PK__notas__7C2D49F0C19F6E6B");

            entity.ToTable("notas");

            entity.Property(e => e.IdNotas)
                .ValueGeneratedNever()
                .HasColumnName("idNotas");
            entity.Property(e => e.Calificacion).HasColumnName("calificacion");
            entity.Property(e => e.Convocatoria).HasColumnName("convocatoria");
            entity.Property(e => e.FechaExamen).HasColumnName("fecha_examen");
            entity.Property(e => e.IdAlumno).HasColumnName("idAlumno");
            entity.Property(e => e.IdAsignatura).HasColumnName("idAsignatura");

            entity.HasOne(d => d.IdAlumnoNavigation).WithMany(p => p.Nota)
                .HasForeignKey(d => d.IdAlumno)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("idAlumno");

            entity.HasOne(d => d.IdAsignaturaNavigation).WithMany(p => p.Nota)
                .HasForeignKey(d => d.IdAsignatura)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("idAsignatura");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
