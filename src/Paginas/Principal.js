import {Outlet, Link } from "react-router-dom";
import './Principal.css';


const Principal = () =>{
  return <div>
    <nav>
        <ul>
            <li>
              <Link to="/Inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/Biografia">Biografia</Link>
            </li>
            <li>
              <Link to="/Canciones">Canciones</Link>
            </li>
            <li>
              <Link to="/Discos">Discos</Link>
            </li>
            <li>
              <Link to="/Competencias">Competencias</Link>
            </li>
            <li>
              <Link to="/Titulos">Titulos</Link>
            </li>
            <li>
              <Link to="/Rivales">Rivales</Link>
            </li>
            <li>
              <Link to="/Musica">Musica</Link>
            </li>
            <li>
              <Link to="/Quinto">Quinto</Link>
            </li>
            <li>
              <Link to="/Creditos">Creditos</Link>
            </li>
        </ul>
    </nav>
    <hr />
    <Outlet />
  </div>
}
export default Principal;