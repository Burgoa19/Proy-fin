import React from 'react';
import './Bio.css';
import imagenWos from './Wos.jpg';

function Biografia() {
  return (
    <div>
      <h1>Biografía</h1>
     
      <Imagen url={imagenWos} alt="Descripción de la imagen" />
      <Parrafo />
      <ParrafoAdicional />
    </div>
  );
}
function Imagen(props) {
  // Usa la prop URL para mostrar la imagen
  return <img src={props.url} alt={props.alt} />;
}

function Parrafo() {
  return (
    <p className="parrafo-grande">
      Valentín Oliva (Buenos Aires, 23 de enero de 1998), conocido artísticamente como Wos (estilizado como WOS o WOS DS3), es un cantante, músico, actor y freestyler argentino.

      Surgió en la escena de las batallas de rap entre raperos de estilo libre, y fue campeón en varias ocasiones de la competencia argentina El Quinto Escalón, que lo llevó a ser uno de los artistas urbanos más reconocidos del país. Además fue campeón de la FMS Argentina 2018 y de la Red Bull Batalla Internacional 2018, al vencer al rapero Aczino en Buenos Aires, tras haber sido subcampeón de la edición anterior frente al mismo en México.

      Tras su éxito en las batallas de rap, decidió iniciar su carrera musical. En 2018 lanzó su primer sencillo, «Púrpura», un trap agresivo. En 2019 lanzó su primer álbum de estudio, Caravana, cuyo sencillo de presentación, «Canguro», se colocó entre los 10 primeros puestos de las listas argentinas por varias semanas, y gracias al cual logró ganar tres Premios Gardel por mejor nuevo artista, mejor álbum/canción urbana y canción del año. También logró ser nominado para los premios Latin Grammy, por mejor nuevo artista. En 2020, sacó el EP Tres puntos suspensivos. En 2021, lanzó su segundo álbum de estudio, Oscuro éxtasis. Se presentó en el entretiempo del partido Argentina-Panamá del 23 de marzo de 2023, primer partido de la Selección Argentina posterior a ganar la Copa Mundial de Fútbol de 2022, cantando su sencillo "Arrancármelo", tema con el cual varios jugadores de la selección habían publicado vídeos en redes sociales y que llegó al sexto puesto en la lista Billboard Hot 100, su mejor posición hasta la fecha.
    </p>
  );
}
function ParrafoAdicional() {
    return (
        <p className="parrafo-grande">
        Wos nació el 23 de enero de 1998 en el barrio porteño de Villa Crespo, Trapero, hijo de Alejandro Oliva, artista musical y fundador del grupo La Bomba del Tiempo, y de Maia Mónaco, cantante (con dos discos publicados, Cosmos y Raíz). Debido a la fuerte influencia artística de sus padres, durante su infancia estudió piano y batería, además de actuación en Escuela Metropolitana de Arte Dramático (EMAD). Culminó sus estudios secundarios en el colegio Mariano Acosta.
  
        Durante su niñez, admitió haber asistido junto a su padre a varias marchas de protesta durante la crisis argentina de 2001, y, en su adolescencia, formó parte de varias tomas de escuela.2​ A los 13 y 14 años, participó en el canal de televisión Paka-Paka en varios reportajes y segmentos, donde hacía rap de estilo libre o tocaba la batería. Durante esta época, empezó a integrarse en las batallas de rap cuando vio a unos chicos compitiendo en una plaza, y a partir de ahí decidió inscribirse en la competencia El Quinto Escalón, siendo el competidor más joven.
      </p>
    );
  }

export default Biografia;
