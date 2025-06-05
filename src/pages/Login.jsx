import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { BoxArrowInLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [ usuario, setUsuario ] = useState('')
  const [ clave, setClave] = useState('')
  const [ error, setError ] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (login(usuario, clave))
      navigate('/administracion')
    else
      setError('Usuario o contraseña inválidos.')
  }

  return (
    <Container className="d-flex justify-content-center vh-100 mt-5">
      <Form onSubmit={handleLogin} noValidate>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group className="mt-5 mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control 
            type="text" 
            required
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="password" 
            required
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit"><BoxArrowInLeft/> Entrar</Button>
      </Form>
    </Container>
  )
}

export default Login