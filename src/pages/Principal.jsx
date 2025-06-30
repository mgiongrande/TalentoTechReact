import { Container, Image } from "react-bootstrap"
import brand from '../assets/isologo.png'

const Principal = () => {
  return (
    <Container className="d-flex justify-content-center mt-5" fluid>
      <Image src={brand} fluid className="mt-5"/>
    </Container>
  )
}

export default Principal