import { useEffect } from "react";
import { eliminarAlumno } from "../services/apiServices";

const ListAlumno = (props) => {

    useEffect(() => {

    }, []);

    const editarAlumno = async (alumno) => {
        props.reset(alumno);
        props.setidAlumnoSeleccionado(alumno.idAlumno)
    }

    const eliminarAlumnos = async (id) => {
        await eliminarAlumno(id);
        const updateAlumno = props.alumnos.filter((alumno) => alumno.idAlumno !== id);
        props.setAlumnos(updateAlumno);
    }
    return (
        <>
            <div className="container mt-2 overflow-auto" style={{ maxWidth: '600px' }}>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Fecha de nacimiento</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.alumnos.map((alumno) =>
                            <tr key={alumno.idAlumno}>
                                <td>{alumno.idAlumno}</td>
                                <td>{alumno.nombre}</td>
                                <td>{alumno.apellido}</td>
                                <td>{alumno.fechaNacimiento}</td>
                                <td>
                                    <div className="d-flex">
                                        <button class="btn btn-success mt-2 me-2 mr-2 flex-fill"
                                            onClick={() => editarAlumno(alumno)}>Actualizar</button>
                                        <button class="btn btn-danger mt-2 mr-2 flex-fill"
                                            onClick={() => eliminarAlumnos(alumno.idAlumno)}>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListAlumno;