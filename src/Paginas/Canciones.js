import React from 'react';
import './Canciones.css'; 

const Canciones = () => {
  return (
    <div>
      <h1>Discografía</h1>
      <p>Explora la discografía de Wos a continuación:</p>
      <AlbumesEstudio />
      <ExtendedPlays />
      <GirasMusicales />
      <Sencillos />
    </div>
  );
}

const AlbumesEstudio = () => {
  return (
    <div>
      <h2>Álbumes de estudio</h2>
      <ul>
        <li>2019: <strong>Caravana: Luz Delito - Pantano - No va Bajar - Melon Vino - Fresco - Canguro</strong></li>
        <br></br>
        <br></br>
        <li>2021: <strong>Oscuro éxtasis: Niño Gordo Flaco - Mira Mama - Buitres - Culpa - Mugre</strong></li>
        <br></br>
        <br></br>
      </ul>
    </div>
  );
}

const ExtendedPlays = () => {
  return (
    <div>
      <h2>Giras Extendidas</h2>
      <ol>
        <li>2020: <strong>Tres puntos suspensivos:  Tres puntos suspensivos está compuesto por cuatro canciones craneadas y producidas a distancia, en medio del aislamiento social preventivo.</strong></li>
      </ol>
    </div>
  );
}
<br></br>
const GirasMusicales = () => {
  return (
    <div>
        <br></br>
      <h2>Giras musicales</h2>
      <ul>
        <li>2019-2020: <strong>Tour Caravana</strong></li>
        <br></br>
        <br></br>
        <li>2021-Presente: <strong>Oscuro Éxtasis Tour</strong></li>
      </ul>
    </div>
  );
}

const Sencillos = () => {
  return (
    <div>
      <h2>Sencillos</h2>
      <table className="tabla-canciones">
        <thead>
          <tr>
            <th>Año</th>
            <th>Título</th>
            <th>Posicionamiento en listas</th>
            <th>Certificaciones</th>
            <th>Álbum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2018</td>
            <td>Púrpura</td>
            <td>—</td>
            <td>—</td>
            <td>Sencillo sin álbum</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>Andrómeda</td>
            <td>74</td>
            <td>—</td>
            <td>Sencillo sin álbum</td>
          </tr>
          {/* Añade más filas para cada sencillo con la información correspondiente */}
        </tbody>
      </table>
    </div>
  );
}

export default Canciones;
