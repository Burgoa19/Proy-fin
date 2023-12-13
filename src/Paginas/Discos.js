import React from 'react';
import './Discos.css';  

const Discos = () => {
  return (
    <div className="discos-container">
      <h1>Discos</h1>
      <p>Explora la discografía de Wos a continuación:</p>
      <Discografia />
    </div>
  );
}

const Discografia = () => {
  return (
    <div className="discografia-container">
      <h2>Álbumes de estudio</h2>
      <ul>
        <li>2019: <strong>Caravana</strong> - <a href="https://www.youtube.com/playlist?list=PLxX0Sl45g9K02L9U_Jn4sHNYrw_tN2Qc2" target="_blank" rel="noopener noreferrer">Ver video</a></li>
        <br></br>
        <br></br>
        <li>2021: <strong>Oscuro éxtasis</strong> - <a href="https://www.youtube.com/playlist?list=PLWVo2tank-zyylFUVkLazE-I-TxOic9Se" target="_blank" rel="noopener noreferrer">Ver video</a></li>
      </ul>

      <h2>Giras Extendidas</h2>
      <ol>
        <li>2020: <strong>Tres puntos suspensivos</strong> - <a href="https://www.youtube.com/watch?v=QxYeSr0ZlEM&ab_channel=WOSDS3" target="_blank" rel="noopener noreferrer">Ver video</a></li>
      </ol>
      <br></br>
      <h2>Giras musicales</h2>
      <ul>
        <li>2019-2020: <strong>Tour Caravana</strong> - <a href="https://www.youtube.com/watch?v=CdDcQ79qNFI&ab_channel=WOSDS3" target="_blank" rel="noopener noreferrer">Ver video</a></li>
        <br></br>
        <br></br>
        <li>2021-Presente: <strong>Oscuro Éxtasis Tour</strong> - <a href="https://www.youtube.com/watch?v=KSSHUiO1mSA&list=PL8GQyz9Xl39mVMBlK43UDkc4baGCOoPP-&ab_channel=mag_live" target="_blank" rel="noopener noreferrer">Ver video</a></li>
      </ul>
    </div>
  );
}

export default Discos;

