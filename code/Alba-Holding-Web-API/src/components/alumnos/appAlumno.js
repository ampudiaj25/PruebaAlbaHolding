import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { crearAlumno, editarAlumno, obtenerAlumnos } from "../services/apiServices";
import ListAlumno from "./list";

const AppAlumno = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [alumnos, setAlumnos] = useState([]);
    const [idAlumnoSeleccionado, setidAlumnoSeleccionado] = useState();

    useEffect(() => {
        const obtenerDatos = async () => {
            await obtenerDatosAlumnos();
        }
        obtenerDatos();
    }, []);

    const obtenerDatosAlumnos = async () => {
        const data = await obtenerAlumnos();
        setAlumnos(data);
    }


    const onSubmit = async (data) => {
        try {
            let result = false;
            if (!idAlumnoSeleccionado) {
                result = await crearAlumno(data);
            } else {
                const dataEditada = {
                    ...data,
                    idAlumno: idAlumnoSeleccionado
                }
                result = await editarAlumno(dataEditada);
            }
            console.log(result);
        } catch (error) {
            console.log(error);
        } finally {
            reset({
                idAlumno: "",
                apellido: "",
                nombre: "",
                fechaNacimiento: "",
            });

            await obtenerDatosAlumnos();
            setidAlumnoSeleccionado();
        }

    }

    return (
        <>
            <div class="container mt-4 card card-body col-md-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Registro de alumnos</h1>

                    <div class="mb-3">
                        <label>Codigo</label>
                        <input
                            type="number"
                            name="idAlumno"
                            id="idAlumno"
                            class="form-control"
                            {...register('idAlumno', {
                                required: 'Este campo es requerido',
                            })}
                        />
                        {errors.idAlumno && <p style={{ color: 'red' }}>{errors.idAlumno.message}</p>}
                    </div>

                    <div class="mb-3">
                        <label>Nombres</label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            class="form-control"
                            {...register('nombre', {
                                required: 'Este campo es requerido',
                            })}
                        />
                        {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre.message}</p>}
                    </div>

                    <div class="mb-3">
                        <label>Apellidos</label>
                        <input
                            type="text"
                            name="apellido"
                            id="apellido"
                            class="form-control"
                            {...register('apellido', {
                                required: 'Este campo es requerido',
                            })}
                        />
                        {errors.apellido && <p style={{ color: 'red' }}>{errors.apellido.message}</p>}
                    </div>

                    <div class="mb-3">
                        <label>Fecha de nacimiento</label>
                        <input
                            type="date"
                            name="fechaNacimiento"
                            id="fechaNacimiento"
                            class="form-control"
                            {...register('fechaNacimiento', {
                                required: 'Este campo es requerido',
                            })}
                        />
                        {errors.fechaNacimiento && <p style={{ color: 'red' }}>{errors.fechaNacimiento.message}</p>}

                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary col-12">Registrar</button>
                    </div>

                </form>
            </div>
            <ListAlumno
                alumnos={alumnos}
                setAlumnos={setAlumnos}
                setidAlumnoSeleccionado={setidAlumnoSeleccionado}
                reset={reset}
            />
        </>
    );
}

export default AppAlumno;