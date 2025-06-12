import { useState } from 'react'
import { Container, Navbar, Nav, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Carrito from './Carrito'
import { BoxArrowInLeft, BoxArrowLeft, Envelope, House, Pencil, PiggyBank, Upc } from "react-bootstrap-icons"
import brand from '../assets/logotipo.png'
import { useAuth } from "../context/AuthContext";
import BotonCarritoMenu from './BotonCarritoMenu'

const Menu = () => {
  const [show,setShow] = useState(false)
	const { user, logout } = useAuth()
  const handleShow = () => setShow(true)
	const handleClose = () => setShow(false)
  const navigate = useNavigate()
  
  const cerrarSesion = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      <Navbar bg='dark' variant="dark" expand='lg'sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              src={brand} 
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'><House/> Inicio</Nav.Link>
              <Nav.Link as={Link} to='/productos'><Upc/>Productos</Nav.Link>
              <Nav.Link as={Link} to='/ofertas'><PiggyBank/> Ofertas</Nav.Link>
              <Nav.Link as={Link} to='/contacto'><Envelope/> Contacto</Nav.Link>
              {user != null && (
                <>
                  <Nav.Link as={Link} to='/administracion'><Pencil/> Administración</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse>
            <Nav className='me-auto'>
              {user === null ? (
                <Nav.Link as={Link} to='/login'><BoxArrowInLeft/> Login</Nav.Link>
              ) : (
                <Button variant="outline-light" onClick={cerrarSesion}><BoxArrowLeft/> Cerrar Sesión</Button>
              )}
            </Nav>
          </Navbar.Collapse>
          <BotonCarritoMenu handleShow={handleShow}/>
          <Carrito show={show} handleClose={handleClose} />
        </Container>
      </Navbar>
    </>
  )
}

export default Menu