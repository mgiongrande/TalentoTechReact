import { Row } from "react-bootstrap"
import TarjetaProducto from "./TarjetaProducto"

const ListaProductos = (props) => {
	const lista = props.listaProductos.map(producto => (
		<TarjetaProducto 
      producto = {producto} 
      handleAddItemToCart={() => props.handleAddItemToCart(producto)} 
    />
	))
	
	return (
    <Row>
      {lista}
    </Row>
	)
}

export default ListaProductos

