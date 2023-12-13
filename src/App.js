

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Principal from './Paginas/Principal';
import Inicio from './Paginas/Inicio';
import Biografia from './Paginas/Biografia';
import Canciones from './Paginas/Canciones';
import Discos from './Paginas/Discos';
import Competencias from './Paginas/Competencias';
import Titulos from './Paginas/Titulos';
import Rivales from './Paginas/Rivales';
import Musica from './Paginas/Musica';
import Quinto from './Paginas/Quinto';
import Creditos from './Paginas/Creditos';
import './App.css';

function App() {
  return (
    <Router>
      <Container>
        <div>
          <h1>Cantante Favorito</h1>
          <Routes>
            <Route path="/" element={<Principal />}>
              <Route path="Inicio" element={<Inicio />} />
              <Route path="Biografia" element={<Biografia />} />
              <Route path="Canciones" element={<Canciones />} />
              <Route path="Discos" element={<Discos />} />
              <Route path="Competencias" element={<Competencias />} />
              <Route path="Titulos" element={<Titulos />} />
              <Route path="Rivales" element={<Rivales />} />
              <Route path="Musica" element={<Musica />} />
              <Route path="Quinto" element={<Quinto />} />
              <Route path="Creditos" element={<Creditos />} />
            </Route>  
          </Routes>
        </div>
      </Container>
      <br />
    </Router>
  );
}

export default App;

