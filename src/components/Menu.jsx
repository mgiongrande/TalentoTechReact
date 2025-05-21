import { useState } from 'react'
import { Container, Navbar, Nav, Button, Offcanvas } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Carrito from './Carrito'
import { BoxArrowInLeft, BoxArrowLeft, Cart, CartFill, Envelope, House, Pencil, PiggyBank, Upc } from "react-bootstrap-icons"

const Menu = (props) => {
  const [show,setShow] = useState(false)
	const handleShow = () => setShow(true)
	const handleClose = () => setShow(false)
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('auth') === 'true'
  const cerrarSesion = () => {
    localStorage.removeItem('auth')
    navigate('/')
  }

  return (
    <>
      <Navbar bg='dark' variant="dark" expand='lg'sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to='/'>The Ultime e-Commerce Site</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'><House/> Inicio</Nav.Link>
              <Nav.Link as={Link} to='/productos'><Upc/>Productos</Nav.Link>
              <Nav.Link as={Link} to='/ofertas'><PiggyBank/> Ofertas</Nav.Link>
              <Nav.Link as={Link} to='/contacto'><Envelope/> Contacto</Nav.Link>
              {isAuth && (
                <>
                  <Nav.Link as={Link} to='/administracion'><Pencil/> Administración</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse>
            <Nav className='me-auto'>
              {!isAuth ? (
                <Nav.Link as={Link} to='/login'><BoxArrowInLeft/> Login</Nav.Link>
              ) : (
                <Button variant="outline-light" onClick={cerrarSesion}><BoxArrowLeft/> Cerrar Sesión</Button>
              )}
            </Nav>
          </Navbar.Collapse>
          {props.lista.length > 0 ?
            <Button onClick={handleShow}><CartFill/></Button> :
            <Button onClick={handleShow}><Cart/></Button>
          }
        </Container>
      </Navbar>
      
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito...</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Carrito 	
            lista={props.lista} 
            handleAddItemToCart={props.handleAddItemToCart} 
            handleRemoveItemFromCart={props.handleRemoveItemFromCart}
          />
        </Offcanvas.Body>
		  </Offcanvas>
    </>
  )
}

export default Menu

// <Button><Pencil/> Administración</Button>