import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { PlusSquare } from "react-bootstrap-icons"
import Producto from '../Model/Producto'
import Mensaje from "../assets/Mensaje"

const AbmProducto = (props) => {
  const [ producto, setProducto] = useState(new Producto(true))

  useEffect(() => {
    if (props.productoAEditar != null) {
      setProducto(new Producto(props.productoAEditar))
    }
    else {
      setProducto(new Producto(props.esOferta))
    }
  },[props.productoAEditar])

  const handleChange = (e) => {
    const {name, value} = e.target
    setProducto({...producto,[name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.esOferta) 
      producto.esOferta = true
    else 
      producto.esOferta = false
    
    var prod = new Producto(producto)

    var errores = prod.validar()

    if (errores.length > 0) {
      Mensaje.showError(errores)
    }
    else {
        e.preventDefault();
        props.onClick(prod)
        Mensaje.showExitoso("Producto agregado correctamente!!")
        setProducto(new Producto(props.esOferta))
    }
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.esAlta ? 'Alta de Producto' : 'Modificación de Producto'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={handleSubmit}>
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
            <Form.Control type="number" required min={props.productoAEditar ? 0 : 1} onChange={handleChange} value={producto.cantidad} name="cantidad"/>
            <Form.Control.Feedback type="invalid">Ingrese el stock inicial del producto</Form.Control.Feedback>
          </Form.Group>
          <Button variant="outline-dark" type="submit" ><PlusSquare/> {props.esAlta ? 'Agregar item' : 'Modificar item'}</Button>
        </Form>  
      </Modal.Body>
    </Modal>
  )
}

export default AbmProducto