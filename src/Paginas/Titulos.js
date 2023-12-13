import React from 'react';
import './Titulos.css';

import imagen2018 from './Wos2.webp';
import imagen2019 from './Woscampeonfms2018.webp';
import imagen2017 from './Subcampeongl2019.webp';
const Titulos = () => {
    return (
        <div className="titulos-container">
            <h1>Titulos</h1>
            <SeccionTitulo año="2018" imagen={imagen2018}>
                Wos logró conectar dos punchlines que son bastante recordados en esta batalla,
                el primero, al acote de Papo "No ganaste por tu skill, lo podés comprobar,
                el resentimiento te pesa y no podés dormir jamás". Wos respondería de una manera
                magistral, referente al problema vocal de Papo.
            </SeccionTitulo>

            <SeccionTitulo año="2018" imagen={imagen2018}>
                Después de los sucesos de este año, Wos fue muy criticado por el excesivo apoyo
                que recibía de parte del público argentino y por solo ganar en su país, provocando
                que varias personas lo tildaran de "falso campeón", por salir vencedor de la
                internacional de una manera polémica, de la misma manera que le pasó a Invert en 2014.
            </SeccionTitulo>

            <SeccionTitulo año="2019" imagen={imagen2017}>
                En la batalla por el 3er puesto, los argentinos se enfrentaron al Team Chile, donde
                la batalla estuvo pareja, llegando a una réplica. En esta réplica, se dió otra de
                las batallas más esperadas del evento: Wos vs Teorema. Durante la batalla, inició bien
                en cuanto a nivel, pero luego ambos mostrarían lo mejor de sí, el argentino dejaría
                una de sus mejores contestaciones en el evento, ya que Teorema realizó un punchline que
                decía que Wos era solo un intento de cañetino:
            </SeccionTitulo>

            <SeccionTitulo año="2019" imagen={imagen2017}>
                "Un intento de calletino que se calle tengo calle que no flashe yo soy argentino,
                lo que me diga puta eso no es verdad, orgulloso Buenos Aires represento a mi ciudad!"
            </SeccionTitulo>

            <SeccionTitulo año="2019" imagen={imagen2019}>
                Tras eso, la batalla siguió bastante pareja, por lo que dió una réplica más, donde
                Trueno derrotó a Kaiser consiguiendo el tercer lugar de la competencia, y el segundo
                lugar en general, quedando como subcampeones de God Level 2019.
            </SeccionTitulo>
        </div>
    );
};

const SeccionTitulo = ({ año, imagen, children }) => {
    return (
        <div className="seccion-titulo">
            <h2>{año}</h2>
            <img src={imagen} alt={`Imagen ${año}`} />
            <p>{children}</p>
        </div>
    );
};

export default Titulos;
