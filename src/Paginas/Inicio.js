import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Inicio.css';

const Inicio = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log('Nombre:', nombre);
        console.log('Apellido:', apellido);
        console.log('Edad:', edad);
        console.log('Correo:', correo);
        console.log('Contraseña:', contrasena);
    };

    return (
        <>
        <br />
        <center>
        <h1>Club de Fans de Wos</h1>
        <h2>Formulario</h2>
        </center>
        
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
                type="text"
                placeholder="Ingresa tu apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEdad">
            <Form.Label>Edad</Form.Label>
            <Form.Control
                type="text"
                placeholder="Ingresa tu edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCorreo">
            <Form.Label>Correo</Form.Label>
            <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContrasena">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
            />
            </Form.Group>

            <Form.Group controlId="formCheckbox2" className="mb-3">
            <Form.Check type="checkbox" label="Acepta Terminas y Condiciones" />
            </Form.Group>

            <Button variant="primary" type="submit">
            Enviar
            </Button>
        </Form>
        <br/>
        <br/>
        <br/>
        <center>
        <h5>
            <a href='http://informatica.umsa.bo/' className="btn-carrera" target="_blank" rel="noopener noreferrer">Carrera de Informatica</a>
        </h5>   
        </center>
        </>
    );
};

export default Inicio;