import { Button, Container, Form } from "react-bootstrap"
import { PlusSquare } from "react-bootstrap-icons"
import Mensaje from "../assets/Mensaje"
import { useState } from "react"

const Administracion = (props) => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    }
    else{
        e.preventDefault();
        Mensaje.showExitoso("Producto agregado correctamente!!")
    }
    setValidated(true)
  }
  
  return (
    <Container className="mt-5">
      <h2>Administración de productos</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tipo de producto</Form.Label>
          <Form.Select required>
            <option>Seleccione tipo de producto</option>
            {
              props.tipoProducto.map(tipo => (
                <option key={tipo.id}>{tipo.tipo}</option>
              ))
            }
          </Form.Select>
          <Form.Control.Feedback type="invalid">Seleccione el tipo de producto</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control type="text" required />
          <Form.Control.Feedback type="invalid">Ingrese el nombre del producto</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ruta imagen</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio: $ </Form.Label>
          <Form.Control type="number" required />
          <Form.Control.Feedback type="invalid">Ingrese el precio del producto</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Stock inicial</Form.Label>
          <Form.Control type="number" required />
          <Form.Control.Feedback type="invalid">Ingrese el stock inicial del producto</Form.Control.Feedback>
        </Form.Group>
        <Button variant="outline-dark" type="submit" ><PlusSquare/> Agregar item</Button>
      </Form>
    </Container>
  )
}

export default Administracion