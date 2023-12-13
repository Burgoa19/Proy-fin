import React from 'react';
import './Creditos.css'; // Asegúrate de tener un archivo CSS vinculado a tu componente

const Creditos = () => {
  return (
    <div className="creditos-container">
      <h1 className="creditos-title">Créditos</h1>
      <p className="creditos-text">
        Este componente fue desarrollado por Carlos Illed Burgoa Orellana,
        estudiante de INF 122 Programación Web 2 - Paralelo D.
      </p>
      <p className="creditos-text">
        Todos los derechos de autor están reservados.
      </p>
      <br></br>
      <p>
        @CarlosBurgoaOrellanaIlled
        <br></br> @C.I.:-14478827lp 
        <br></br>@R.U:-1845088
        <br></br> @Carrera-Informatica
      </p>
      <p className="creditos-text">
        Agradecimientos a la Licenciada Tellez por el tiempo otorgado; esta
        página se hizo en tiempo récord y fue creada por el estudiante que cursa
        Programación Web 2 en el horario de 4 a 6 de la tarde. El contenido se
        aprendió y se implementó en esta página con 10 secciones, cumpliendo con
        lo establecido.
      </p>
    </div>
  );
};

export default Creditos;
