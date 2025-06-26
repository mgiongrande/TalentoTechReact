import { Container, Image, Navbar, Row, Col } from "react-bootstrap"
import { Envelope, Github, Linkedin } from "react-bootstrap-icons"
import brand from '../assets/isotipo.png'

const Footer = () => {
  return (
    <Navbar bg='dark' variant="dark" expand='lg'fixed='bottom'>
      <Container>
        <Navbar.Brand>
          <img 
            src={brand}
            height="25"
            className="d-inline-block align-top"
          />
        <Navbar.Brand> Mariano Giongrande (2025)</Navbar.Brand>
        </Navbar.Brand>
          <Navbar.Text><Github/> mgiongrande</Navbar.Text>
          <Navbar.Text><Envelope/> mgiongrande@icloud.com</Navbar.Text>
          <Navbar.Text><Linkedin/> @mgiongrande</Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default Footer