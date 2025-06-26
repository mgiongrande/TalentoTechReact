import { Button, Container, Form } from "react-bootstrap"
import Mensaje from "../assets/Mensaje"
import { useState } from 'react'
import { EnvelopeCheck } from "react-bootstrap-icons"
import CorreoElectronico from '../Model/CorreoElectronico'


const Contacto = () => {
  const [validated, setValidated] = useState(false)
  const [correoElectronico, setCorreoElectronico] = useState(new CorreoElectronico())

  const handleChange = (e) => {
    const {name, value} = e.target
    setCorreoElectronico({...correoElectronico,[name]: value})
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true)
    }
    else{
      event.preventDefault();
      Mensaje.showExitoso("Correo enviado exitosamente")
      setValidated(false)
      setCorreoElectronico(new CorreoElectronico())
    }
  };

  return (
    <Container className="mt-5">
      <h2>Envíenos su consulta</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mt-5 mb-3" controlId="contactoNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            type="text" 
            value={correoElectronico.nombre} 
            onChange={handleChange} 
            required 
            placeholder="Nombre"
            name="nombre" 
          />
          <Form.Control.Feedback type="invalid">Ingrese su nombre</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactoApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control 
            type="text" 
            value={correoElectronico.apellido} 
            onChange={handleChange} 
            required 
            placeholder="Apellido"
            name="apellido"
          />
          <Form.Control.Feedback type="invalid">Ingrese su apellido</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactoCorreo">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control 
            type="email" 
            value={correoElectronico.correoElectronico} 
            onChange={handleChange} 
            placeholder="nombre@dominio.com" 
            required
            name="correoElectronico"
          />
          <Form.Control.Feedback type="invalid">Ingrese un correo electrónico válido</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactoMensaje">
          <Form.Label>Escriba aquí su mensaje</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={correoElectronico.mensaje} 
            onChange={handleChange} 
            required 
            name="mensaje"
          />
          <Form.Control.Feedback type="invalid">Ingrese su mensaje</Form.Control.Feedback>
        </Form.Group>
        <Button variant="outline-dark" type="submit" ><EnvelopeCheck/> Enviar</Button>
      </Form>
    </Container>
  )
}

export default Contacto