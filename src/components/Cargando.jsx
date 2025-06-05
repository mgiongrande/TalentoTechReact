import { Container, Spinner } from "react-bootstrap"

const Cargando =  () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" variant="dark" />
    </Container>
  )
}

export default Cargando