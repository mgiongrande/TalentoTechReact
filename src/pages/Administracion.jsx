import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { PlusSquare, Search } from "react-bootstrap-icons"
import AbmProducto from "../components/AbmProducto"
import TablaProducto from "../components/TablaProducto"
import Cargando from "../components/Cargando"
import { parametros } from "../assets/params"

const Administracion = (props) => {
  const [ tipoProducto, setTipoProducto ] = useState('')
  const [ open, setOpen] = useState(false)
  const [ esAlta, setEsAlta ] = useState(false)
  const [ openTable, setOpenTable ] = useState(false)
  const [ productoAEditar, setProductoAEditar ] = useState(null)

  const lista = tipoProducto === 'Producto' ? props.productosEnVenta : tipoProducto === 'Oferta' ? props.productosEnOferta : []
  const esOferta = tipoProducto === 'Oferta' ? true : false

  const handleChange = (e) => {
    setOpenTable(false)
    const value = e.target.value
    setTipoProducto(value)
  }

  const handleOpen = () => {
    setOpen(true)
    setEsAlta(true)
  }

	const handleClose = () => {
    setProductoAEditar(null)
    setOpen(false)
    setEsAlta(false)
  }

  const handleClick = () => { 
    if (tipoProducto === 'Producto' && props.productosEnVenta.length === 0)
      props.cargarProductos()
    if (tipoProducto === 'Oferta' && props.productosEnOferta.length === 0)
      props.cargarOfertas()

    setOpenTable(true)
  } 

  const handleProductoAEditar = (producto) => {
    setProductoAEditar(producto)
    setOpen(true)
  }

  const grabar = (producto) => {
    if (productoAEditar) 
      props.onUpdate(producto)
    else
      props.onAgregar(producto)

    setProductoAEditar(null)
  }

  return (
    <Container className="col-md-5 mt-5 mx-auto mb-5">
      <Form>
        <Form.Label><h2>Administración de Productos</h2></Form.Label>
        <Form.Group className="mb-3">
          <Form.Label>Tipo de producto</Form.Label>
          <Form.Select required onChange={handleChange} name="tipoProducto">
            <option>Seleccione tipo de producto</option>
            {
              parametros.tipoProductos.map(tipo => (
                <option key={tipo.id}>{tipo.tipo}</option>
              ))
            }
          </Form.Select>
          <Form.Control.Feedback type="invalid">Seleccione el tipo de producto</Form.Control.Feedback>
        </Form.Group>
        <Button variant="outline-dark" onClick={handleClick}><Search/> Buscar</Button>
        <Button variant="outline-dark" onClick={handleOpen} className="mx-2"><PlusSquare/> Nuevo</Button>
      </Form>
      <AbmProducto 
        show={open} 
        handleClose={handleClose} 
        productoAEditar={productoAEditar} 
        esAlta={esAlta} 
        onClick={grabar} 
        esOferta={esOferta}
      />
      {props.isLoading ? <Cargando/> : null}
      {openTable && lista.length > 0 ? <TablaProducto productos={lista} onDelete={props.onDelete} onUpdate={handleProductoAEditar}/> : null }
    </Container>
  )
}

export default Administracion