import { eliminarAsignatura } from "../services/apiServices";

const ListAsignatura = (props) => {
    const eliminarAsignaturas = async (id) => {
        await eliminarAsignatura(id);
        const updateAsignatura = props.asignaturas.filter((asignatura) => asignatura.idAsignatura !== id);
        props.setAsignaturas(updateAsignatura);
    }

    const editarAsignatura = async (asignatura) => {
        props.reset(asignatura);
        props.setIdAsignaturaSeleccionada(asignatura.idAsignatura)
    }

    return (
        <>
            <div className="container mt-2 overflow-auto" style={{ maxWidth: '600px' }}>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Asignatura</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.asignaturas.map((asignatura) =>
                            <tr key={asignatura.idAsignatura}>
                                <td>{asignatura.idAsignatura}</td>
                                <td>{asignatura.nombre}</td>
                                <td>
                                    <div className="d-flex">
                                        <button class="btn btn-success mt-2 me-2 mr-2 flex-fill"
                                            onClick={() => editarAsignatura(asignatura)}>Actualizar</button>
                                        <button class="btn btn-danger mt-2 mr-2 flex-fill"
                                            onClick={() => eliminarAsignaturas(asignatura.idAsignatura)}>Eliminar</button>
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

export default ListAsignatura;