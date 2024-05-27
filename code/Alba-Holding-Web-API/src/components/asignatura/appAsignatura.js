import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { crearAsignatura, editarAsignatura, obtenerAsignaturas } from "../services/apiServices";
import ListAsignatura from "./list";

const AppAsignatura = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [asignaturas, setAsignaturas] = useState([]);
    const [idAsignaturaSeleccionada, setIdAsignaturaSeleccionada] = useState();

    useEffect(() => {

        const obtenerDatos = async () => {
            await obtenerDatosAsignaturas();
        }

        obtenerDatos();

    }, []);

    const obtenerDatosAsignaturas = async () => {
        const data = await obtenerAsignaturas();
        setAsignaturas(data);
    }

    const onSubmit = async (data) => {
        try {
            let result = false;
            if (!idAsignaturaSeleccionada) {
                result = await crearAsignatura(data);
            } else {
                const dataEditada = {
                    ...data,
                    idAsignatura: idAsignaturaSeleccionada
                }
                result = await editarAsignatura(dataEditada);
            }
            console.log(result);
        } catch (error) {
            console.log(error);
        } finally {
            reset({
                idAsignatura: "",
                nombre: "",
            });

            await obtenerDatosAsignaturas();
            setIdAsignaturaSeleccionada();
        }

    }

    return (
        <>
            <div class="container mt-4 card card-body col-md-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Registro de asignaturas</h1>

                    <div class="mb-3">
                        <label>Codigo</label>
                        <input
                            type="number"
                            name="idAsignatura"
                            id="idAsignatura"
                            class="form-control"
                            {...register('idAsignatura', {
                                required: 'Este campo es requerido',
                            })}
                        />
                        {errors.idAsignatura && <p style={{ color: 'red' }}>{errors.idAsignatura.message}</p>}
                    </div>

                    <div class="mb-3">
                        <label>Nombre</label>
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
                        <button type="submit" class="btn btn-primary col-12">Registrar</button>
                    </div>

                </form>
            </div>
            <ListAsignatura
                asignaturas={asignaturas}
                setAsignaturas={setAsignaturas}
                setIdAsignaturaSeleccionada={setIdAsignaturaSeleccionada}
                reset={reset}
            />
        </>
    );
}

export default AppAsignatura;