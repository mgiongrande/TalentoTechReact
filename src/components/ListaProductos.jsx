import { Col, Container, Row } from "react-bootstrap"
import TarjetaProducto from "./TarjetaProducto"

const ListaProductos = (props) => {
	return (
    <Container className="mt-4">
      <Row>
        {props.listaProductos.map(producto => (
          <Col key={producto.id} style={{ flex: "0 0 20%", maxWidth: "20%" }} className="mb-2">
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