create database DBColegio

use DBColegio

Create table alumnos (
idAlumno int primary key,
nombre varchar(25),
apellido varchar(25),
fecha_nacimiento Date
)

Create table asignaturas (
idAsignatura int primary key,
nombre varchar(25) not null
)

Create table notas(
idNotas int primary key,
idAsignatura int not null,
calificacion float not null,
fecha_examen Date not null,
convocatoria int not null,
idAlumno int not null,
CONSTRAINT idAsignatura FOREIGN KEY (idAsignatura) References asignaturas(idAsignatura),
CONSTRAINT idAlumno FOREIGN KEY (idAlumno) References alumnos(idAlumno)
)

select * from alumnos
select * from notas
select * from notas

INSERT INTO alumnos(idAlumno,nombre,apellido,fecha_nacimiento) VALUES (3,'Dairo','Garcia','01/07/2023')
INSERT INTO asignaturas(idAsignatura,nombre) VALUES (12,'Matematicas')
INSERT INTO notas(idNotas,idAsignatura,calificacion,fecha_examen,convocatoria,idAlumno) VALUES (123,12,23,'01/07/2023',4,3)