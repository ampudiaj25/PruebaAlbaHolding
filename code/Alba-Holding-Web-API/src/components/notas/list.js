import { eliminarNota } from "../services/apiServices";

const ListNotas = (props) => {

    const eliminarNotas = async (id) => {
        await eliminarNota(id);
        const updateNota = props.notas.filter((nota) => nota.idNotas !== id);
        props.setNotas(updateNota);
    }

    const editarNota = async (nota) => {
        props.reset(nota);
        props.setIdNotaSeleccionada(nota.idNotas);
    }

    const getNombreAlumno = (id) => {
        const alumno = props.alumnos.find(alumno => alumno.idAlumno === id);
        return alumno ? alumno.nombre : 'Desconocido';
    };

    const getNombreAsignatura = (id) => {
        const asignatura = props.asignaturas.find(asignatura => asignatura.idAsignatura === id);
        return asignatura ? asignatura.nombre : 'Desconocido';
    };

    return (
        <>
            <div className="container mt-2 overflow-auto d-flex justify-content-center" style={{ maxWidth: '100%' }}>
                <table className="table table-striped table-hover" style={{ width: 'auto', tableLayout: 'auto' }} >
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Asignatura</th>
                            <th scope="col">Calificación</th>
                            <th scope="col">Fecha examen</th>
                            <th scope="col">Convocatoria</th>
                            <th scope="col">Alumno</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.notas.map((nota) =>
                            <tr key={nota.idNotas}>
                                <td>{nota.idNotas}</td>
                                <td>{getNombreAsignatura(nota.idAsignatura)}</td>
                                <td>{nota.calificacion}</td>
                                <td>{nota.fechaExamen}</td>
                                <td>{nota.convocatoria}</td>
                                <td>{getNombreAlumno(nota.idAlumno)}</td>
                                <td>
                                    <div className="d-flex">
                                        <button class="btn btn-success mt-2 me-2 mr-2 flex-fill"
                                            onClick={() => editarNota(nota)}>Actualizar</button>
                                        <button class="btn btn-danger mt-2 mr-2 flex-fill"
                                            onClick={() => eliminarNotas(nota.idNotas)}>Eliminar</button>
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

export default ListNotas;