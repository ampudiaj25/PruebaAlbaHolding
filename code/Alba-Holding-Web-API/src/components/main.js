import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppAlumno from './alumnos/appAlumno';
import AppAsignatura from './asignatura/appAsignatura';
import AppNota from './notas/appNota';
const Main = () => {

    return (
        <Router>
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-pills nav-fill">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/alumnos">Alumnos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/asignaturas">Asignaturas</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/calificaciones">Calificaciones</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/alumnos" element={<AppAlumno />} />
                        <Route path="/Asignaturas" element={<AppAsignatura />} />
                        <Route path="/Calificaciones" element={<AppNota />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default Main;