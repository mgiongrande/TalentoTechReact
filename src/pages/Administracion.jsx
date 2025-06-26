import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { PlusSquare } from "react-bootstrap-icons"
import AbmProducto from "../components/AbmProducto"
import TablaProducto from "../components/TablaProducto"
import Cargando from "../components/Cargando"
import { parametros } from "../assets/params"
import { useProducto } from "../context/ProductoContext"
import { useOferta } from "../context/OfertaContext"

const Administracion = (props) => {
  const { productos, cargarProductos, agregarProducto, modificarProducto, borrarProducto } = useProducto()
  const { ofertas, cargarOfertas, agregarOferta, modificarOferta, borrarOferta } = useOferta()
  const [ isLoading, setIsLoading ] = useState(false)
  const [ tipoProducto, setTipoProducto ] = useState('')
  const [ open, setOpen] = useState(false)
  const [ esAlta, setEsAlta ] = useState(false)
  const [ openTable, setOpenTable ] = useState(false)
  const [ productoAEditar, setProductoAEditar ] = useState(null)

  const lista = tipoProducto === 'Producto' ? productos : tipoProducto === 'Oferta' ? ofertas : []
  const esOferta = tipoProducto === 'Oferta' ? true : false

  const handleChange = (e) => {
    setOpenTable(false)
    const value = e.target.value == 'Seleccione tipo de producto' ? '' : e.target.value
    setTipoProducto(value)

    if (value === 'Producto' && productos.length === 0) {
      setIsLoading(true)
      cargarProductos()
    }
    if (value === 'Oferta' && ofertas.length === 0){
      setIsLoading(true)
      cargarOfertas()
    }
    setIsLoading(false)

    setOpenTable(true)
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

  const handleProductoAEditar = (producto) => {
    setProductoAEditar(producto)
    setOpen(true)
  }

  const handleProductoABorrar = producto => {
    esOferta ? borrarOferta(producto) : borrarProducto(producto)
  }

  const grabar = (producto) => {
    if (productoAEditar) {
      if (producto.esOferta)
        modificarOferta(producto)
      else
        modificarProducto(producto)
    }
    else {
      if (producto.esOferta)
        agregarOferta(producto)
      else
        agregarProducto(producto)
    }

    setProductoAEditar(null)
  }

  return (
    <Container className="d-flex flex-column col-md-5 mt-5 mx-auto mb-5">
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
        {tipoProducto != '' ? <Button variant="outline-dark" onClick={handleOpen} className="mx-2"><PlusSquare/> Nuevo</Button> : null }
      </Form>
      <AbmProducto 
        show={open} 
        handleClose={handleClose} 
        productoAEditar={productoAEditar} 
        esAlta={esAlta} 
        onClick={grabar} 
        esOferta={esOferta}
      />
      {isLoading ? <Cargando/> : null}
      {openTable && lista.length > 0 ? 
        <TablaProducto 
          productos={lista} 
          onDelete={handleProductoABorrar} 
          onUpdate={handleProductoAEditar}
        /> : null 
      }
    </Container>
  )
}

export default Administracion