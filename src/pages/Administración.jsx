import { Button, Container, Form, Stack } from "react-bootstrap"
import { ConeStriped, PlusSquare } from "react-bootstrap-icons"
import Mensaje from "../assets/Mensaje"
import { useState } from "react"

const Administracion = (props) => {
  const [validated, setValidated] = useState(false)
  const [producto, setProducto] = useState({
    tipoProducto: '',
    nombre: '',
    imagen: 'https://picsum.photos/200/300?random=50',
    precio: 1,
    cantidad: 1 
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setProducto({...producto,[name]: value})
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    }
    else{
        e.preventDefault();
        props.onAgregar(producto)
        Mensaje.showExitoso("Producto agregado correctamente!!")
        setProducto({
          tipoProducto: '',
          nombre: '',
          imagen: 'https://picsum.photos/200/300?random=50',
          precio: 1,
          cantidad: 1 
        })
    }
    setValidated(true)
  }
  
  return (
    <Stack className="col-md-3 mx-auto">
      <h2>Administración de productos</h2>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tipo de producto</Form.Label>
          <Form.Select required value={producto.tipoProducto} onChange={handleChange} name="tipoProducto">
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
          <Form.Control type="text" required onChange={handleChange} value={producto.nombre} name="nombre"/>
          <Form.Control.Feedback type="invalid">Ingrese el nombre del producto</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ruta imagen</Form.Label>
          <Form.Control type="text"  onChange={handleChange} value={producto.imagen} name="imagen"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio: $ </Form.Label>                                                                                                                                 
          <Form.Control type="number" required min='1' onChange={handleChange} value={producto.precio} name="precio"/>
          <Form.Control.Feedback type="invalid">Ingrese el precio del producto</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Stock inicial</Form.Label>
          <Form.Control type="number" required min='1' onChange={handleChange} value={producto.cantidad} name="cantidad"/>
          <Form.Control.Feedback type="invalid">Ingrese el stock inicial del producto</Form.Control.Feedback>
        </Form.Group>
        <Button variant="outline-dark" type="submit" ><PlusSquare/> Agregar item</Button>
      </Form>                         
    </Stack>
  )
}

export default Administracion