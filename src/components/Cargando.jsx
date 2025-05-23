import { Container, Spinner } from "react-bootstrap"

const Cargando =  () => {
  return (
    <Container className="d-flex justify-content-center mt-5">
        <h2>Cargado datos...  </h2>
        <Spinner animation="border" role="status" variant="dark" />
    </Container>
  )
}

export default Cargando