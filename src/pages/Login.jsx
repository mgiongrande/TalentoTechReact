import { Button, Container, Form } from "react-bootstrap";
import { BoxArrowInLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('auth', 'true')
    navigate('/administracion')
  }

  return (
    <Container className="mt-5" style={{maxWidth: 600}}>
      <h2>Iniciar sesión</h2>
      <Form>
        <Form.Group className="mt-5 mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" required/>
        </Form.Group>
        <Button variant="outline-dark" onClick={handleLogin}><BoxArrowInLeft/> Entrar</Button>
      </Form>
    </Container>
  )
}

export default Login