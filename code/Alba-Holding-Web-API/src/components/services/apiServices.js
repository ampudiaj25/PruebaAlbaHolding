import axios from 'axios';

export const crearAlumno = async (data) => {
  let result = true;
  await axios.post('https://localhost:7158/api/Alumno', data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      result = false;
      console.log(error);
    });

  return result;
};

export const obtenerAlumnos = async () => {
  let data = [];
  await axios.get('https://localhost:7158/api/Alumno')
    .then((response) => {
      console.log(response)
      data = response.data;
    })
    .catch((error) => {
      console.log(error);
    })

  return data;
};

export const eliminarAlumno = async (id) => {
  let result = true;
  await axios.delete(`https://localhost:7158/api/Alumno/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      result = false;
      console.log(error);
    })
  return result;
}

export const editarAlumno = async(data) =>{
  let result = true;
  await axios.put('https://localhost:7158/api/Alumno',data)
  .then((response)=>{
      console.log(response);
  })
  .catch((error)=>{
      result = false;
      console.log(error);
  })
  return result;
}

//Services Asignatura

export const crearAsignatura = async (data) => {
  let result = true;
  await axios.post('https://localhost:7158/api/Asignaturas', data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      result = false;
      console.log(error);
    });

  return result;
};

export const obtenerAsignaturas = async () => {
  let data = [];
  await axios.get('https://localhost:7158/api/Asignaturas')
    .then((response) => {
      console.log(response)
      data = response.data;
    })
    .catch((error) => {
      console.log(error);
    })

  return data;
};

export const eliminarAsignatura = async (id) => {
  let result = true;
  await axios.delete(`https://localhost:7158/api/Asignaturas/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      result = false;
      console.log(error);
    })
  return result;
}

export const editarAsignatura = async(data) =>{
  let result = true;
  await axios.put('https://localhost:7158/api/Asignaturas',data)
  .then((response)=>{
      console.log(response);
  })
  .catch((error)=>{
      result = false;
      console.log(error);
  })
  return result;
}

// Services Notas

export const crearNota = async (data) => {
  let result = true;
  await axios.post('https://localhost:7158/api/Notas', data)
    .then((response) => {
      console.log(response);
      debugger
    })
    .catch((error) => {
      result = false;
      console.log(error);
    });

  return result;
};

export const obtenerNotas = async () => {
  let data = [];
  await axios.get('https://localhost:7158/api/Notas')
    .then((response) => {
      console.log(response)
      data = response.data;
    })
    .catch((error) => {
      console.log(error);
    })

  return data;
};

export const eliminarNota = async (id) => {
  let result = true;
  await axios.delete(`https://localhost:7158/api/Notas/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      result = false;
      console.log(error);
    })
  return result;
}

export const editarNota = async(data) =>{
  let result = true;
  await axios.put('https://localhost:7158/api/Notas',data)
  .then((response)=>{
      console.log(response);
  })
  .catch((error)=>{
      result = false;
      console.log(error);
  })
  return result;
}