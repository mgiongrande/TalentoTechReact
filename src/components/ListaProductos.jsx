import { Col, Container, Row } from "react-bootstrap"
import TarjetaProducto from "./TarjetaProducto"
import '../css/ListaProductos.css'

const ListaProductos = (props) => {
	return (
    <Container className="mt-4">
      <Row>
        {props.listaProductos.map(producto => (
          <Col key={producto.id} className="h-100 d-flex flex-column mb-2">
            <TarjetaProducto 
              producto = {producto} 
            />
          </Col>
        ))}
      </Row>
    </Container>
	)
}

export default ListaProductos