import { Button, Container, Form } from "react-bootstrap"
import Mensaje from "../assets/Mensaje"
import { useState } from 'react'
import { EnvelopeCheck } from "react-bootstrap-icons"

const Contacto = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      event.preventDefault();
      Mensaje.showExitoso("Correo enviado exitosamente")
    }
    setValidated(true)
  };

  return (
    <Container className="mt-5">
      <h2>Envíenos su consulta</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mt-5 mb-3" controlId="contactoNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" required placeholder="Nombre" />
          <Form.Control.Feedback type="invalid">Ingrese su nombre</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactoApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" required placeholder="Apellido"/>
          <Form.Control.Feedback type="invalid">Ingrese su apellido</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactoCorreo">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="nombre@dominio.com" required/>
          <Form.Control.Feedback type="invalid">Ingrese un correo electrónico válido</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactoMensaje">
          <Form.Label>Escriba aquí su mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} required />
          <Form.Control.Feedback type="invalid">Ingrese su mensaje</Form.Control.Feedback>
        </Form.Group>
        <Button variant="outline-dark" type="submit" ><EnvelopeCheck/> Enviar</Button>
      </Form>
    </Container>
  )
}

export default Contacto