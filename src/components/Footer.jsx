import { Container, Navbar } from "react-bootstrap"
import { Envelope, Github, Linkedin } from "react-bootstrap-icons"

const Footer = () => {
  return (
    <Navbar bg='dark' variant="dark" expand='lg'fixed='bottom'>
      <Container>
        <Navbar.Brand>The Ultimate e-Commerce Site - Mariano Giongrande (2025)</Navbar.Brand>
        <Navbar.Text><Github/> mgiongrande/TalentoTeachReact</Navbar.Text>
        <Navbar.Text><Envelope/> mgiongrande@icloud.com</Navbar.Text>
        <Navbar.Text><Linkedin/> @mgiongrande</Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default Footer
