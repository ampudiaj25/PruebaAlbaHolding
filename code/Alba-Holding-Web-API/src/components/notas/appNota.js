import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { crearNota, editarNota, obtenerAlumnos, obtenerAsignaturas, obtenerNotas } from "../services/apiServices";
import ListNotas from "./list";

const AppNota = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [notas, setNotas] = useState([]);
    const [idNotaSeleccionada, setIdNotaSeleccionada] = useState();
    const [asignaturas, setAsignaturas] = useState([]);
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            await obtenerDatosNotas();
            await obtenerDatosAsignaturas();
            await obtenerDatosAlumnos();
        }
        obtenerDatos();
    }, []);

    const obtenerDatosAsignaturas = async () => {
        const result = await obtenerAsignaturas();
        setAsignaturas(result);
    }

    const obtenerDatosAlumnos = async () => {
        const result = await obtenerAlumnos();
        setAlumnos(result);
    }

    const obtenerDatosNotas = async () => {
        const data = await obtenerNotas();
        setNotas(data);
    }

    const onSubmit = async (data) => {debugger
        try {
            let result = false;
            if (!idNotaSeleccionada) {
                result = await crearNota(data);
                debugger
            } else {
                const dataEditada = {
                    ...data,
                    idNotas: idNotaSeleccionada
                }
                result = await editarNota(dataEditada);
            }
            console.log(result);
        } catch (error) {
            console.log(error);
        } finally {
            reset({
                idNotas: "",
                idAsignatura: "",
                calificacion: "",
                fechaExamen: "",
                convocatoria: "",
                idAlumno: "",
            });

            await obtenerDatosNotas();
            setIdNotaSeleccionada();
        }
    }

    return (
        <>
            <div class="container mt-4 card card-body col-md-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Registro de calificaciones</h1>

                    <div class="mb-3">
                        <label>Codigo</label>
                        <input
                            type="number"
                            name="idNotas"
                            id="idNotas"
                            class="form-control"
                            {...register('idNotas', {
                                required: 'Este campo es requerido',
                            })}
                        />
                        {errors.idNotas && <p style={{ color: 'red' }}>{errors.idNotas.message}</p>}
                    </div>

                    <div className="mb-3">
                        <label>Asignatura</label>
                        <select
                            name="idAsignatura"
                            id="idAsignatura"
                            className="form-control"
                            {...register('idAsignatura', {
                                required: 'Este campo es requerido',
                            })}
                        >
                            <option value="">Seleccione una asignatura</option>
                            {asignaturas.map((asignatura) => (
                                <option key={asignatura.idAsignatura} value={asignatura.idAsignatura}>
                                    {asignatura.nombre}
                                </option>
                            ))}
                        </select>
                        {errors.idAsignatura && <p style={{ color: 'red' }}>{errors.idAsignatura.message}</p>}
                    </div>

                    <div class="mb-3">
                        <label>Calificación</label>
                        <input
                            type="number"
                            name="calificacion"
                            id="calificacion"
                            class="form-control"
                            {...register('calificacion', {
                                required: 'Este campo es requerido',
                            })}
                        />
                        {errors.calificacion && <p style={{ color: 'red' }}>{errors.calificacion.message}</p>}
                    </div>

                    <div class="mb-3">
                        <label>Fecha del examen</label>
                        <input
                            type="date"
                            name="fechaExamen"
                            id="fechaExamen"
                            class="form-control"
                            {...register('fechaExamen', {
                                required: 'Este campo es requerido',
                            })}
                        />
                        {errors.fechaExamen && <p style={{ color: 'red' }}>{errors.fechaExamen.message}</p>}
                    </div>

                    <div class="mb-3">
                        <label>Convocatoria</label>
                        <input
                            type="number"
                            name="convocatoria"
                            id="convocatoria"
                            class="form-control"
                            {...register('convocatoria', {
                                required: 'Este campo es requerido',
                            })}
                        />
                        {errors.convocatoria && <p style={{ color: 'red' }}>{errors.convocatoria.message}</p>}
                    </div>

                    <div className="mb-3">
                        <label>Alumno</label>
                        <select
                            name="idAlumno"
                            id="idAlumno"
                            className="form-control"
                            {...register('idAlumno', {
                                required: 'Este campo es requerido',
                            })}
                        >
                            <option value="">Seleccione un alumno</option>
                            {alumnos.map((alumno) => (
                                <option key={alumno.idAlumno} value={alumno.idAlumno}>
                                    {alumno.nombre}
                                </option>
                            ))}
                        </select>
                        {errors.idAlumno && <p style={{ color: 'red' }}>{errors.idAlumno.message}</p>}
                    </div>

                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary col-12">Registrar</button>
                    </div>

                </form>
            </div>
            <ListNotas
                notas={notas}
                setNotas={setNotas}
                idNotaSeleccionada={idNotaSeleccionada}
                setIdNotaSeleccionada={setIdNotaSeleccionada}
                reset={reset}
                alumnos={alumnos}
                asignaturas={asignaturas}
            />
        </>
    );
}

export default AppNota;