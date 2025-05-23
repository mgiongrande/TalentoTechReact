import { Container } from "react-bootstrap"
import brand from '../assets/isologo.png'

const Principal = () => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <img src={brand}/>
    </Container>
  )
}

export default Principal