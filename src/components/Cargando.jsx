import { Container, Spinner } from "react-bootstrap"

const Cargando =  () => {
  return (
    <Container className="mt-5">
      <h2>Aguarde mientras se cargan los datos...</h2>
      <Spinner className="mt-5" variant="primary"/>
    </Container>
  )
}

export default Cargando