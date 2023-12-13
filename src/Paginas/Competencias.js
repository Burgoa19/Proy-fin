import React from 'react';
import './Competencias.css'; 

const Competencias = () => {
  return (
    <div className="competencias-container">
      <h1 className="competencias-title">Competencias</h1>
      <br></br>

      <div className="seccion-container">
        <h2 className="seccion-title">Quinto Escalón</h2>
        <p className="seccion-text">
          El Quinto Escalón fue una competencia de batallas de rap, fundada y
          organizada en el Parque Rivadavia del barrio de Caballito en la Ciudad
          de Buenos Aires, Argentina. Era albergada por el rapero YSY A (Alejo
          Acosta) y el presentador de radio Muphasa (Matías Berner). Se disputó
          por primera vez el 11 de marzo de 2012, y finalizó el 11 de noviembre de
          2017 con un evento en el Microestadio Malvinas Argentinas.
        </p>
        <p className="seccion-text">
          La competencia se realizaba los domingos de por medio (es decir, un
          domingo sí y otro no), con entrada libre y gratuita, y llegó a ser uno
          de los eventos de freestyle rap más renombrados de Argentina,
          Latinoamérica y España. Con el paso del tiempo, El Quinto Escalón
          terminó siendo la cuna de una nueva ola de artistas emergentes en
          Argentina, y se convertiría en uno de los movimientos culturales más
          importantes de la década en el país.
        </p>
      </div>

      <br></br>

      <div className="seccion-container">
        <h2 className="seccion-title">Freestyle Master Series</h2>
        <p className="seccion-text">
          La Freestyle Master Series, comúnmente conocida como FMS, es una liga
          profesional de improvisación de estilo libre que enfrenta a 12
          freestylers (antes de la temporada 2021 eran solo 10 participantes,
          actualmente son 12) de un mismo país (o con residencia en ese país), con
          excepción de la edición Internacional.
        </p>
        <p className="seccion-text">
          En un año, cada rapero se enfrentará a cada uno de sus oponentes en una
          batalla, en la que se votarán por él puntos en función de los resultados
          del enfrentamiento y lo que hayan votado los jurados de la Freestyle
          Master Series, teniendo en cuenta el flow, las skills, la puesta en
          escena, el punchline y muchos otros detalles.
        </p>
        <p className="seccion-text">
          Al final de cada temporada, el freestyler con la puntuación más alta es
          coronado como campeón, mientras que algunos de los que tuvieron menor
          puntuación descienden de categoría y son reemplazados por otros.
        </p>
      </div>

      <br></br>

      <div className="seccion-container">
        <h2 className="seccion-title">Red Bull</h2>
        <p className="seccion-text">
          La Red Bull Batalla de Gallos Internacional es una competición anual de
          freestyle rap que se disputa desde 2005 y que mide las habilidades de
          participantes de toda Latinoamérica. Entre sus campeones se encuentran
          famosos raperos como Arkano, Aczino o Chuty. El nivel de reconocimiento
          de la competición es tal, que cientos de miles de personas la siguen en
          directo.
        </p>
        <p className="seccion-text">
          En 2010, 2011 y 2012 no se disputó la competición.
        </p>
      </div>
    </div>
  );
};

export default Competencias;
