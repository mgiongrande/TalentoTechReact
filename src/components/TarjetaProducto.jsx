import { Card } from "react-bootstrap"
import { useCarrito } from "../context/CarritoContext";
import BotonCarrito from "./BotonCarrito";
import Mensaje from "../assets/Mensaje";

const TarjetaProducto = (props) => {
	const { cantidadEnCarritoPorId } = useCarrito()

	const handleClick = (e) => {
		e.preventDefault()
    console.log(props.producto)
		if (cantidadEnCarritoPorId(props.producto.id) === props.producto.cantidad) {
			Mensaje.mostrarSinStock()
		} else {
			props.handleAddItemToCart(e.target.producto)
		}
	}

	const buttonSettings = {
		condicion: props.producto.cantidad > 0,
		handleClick: handleClick,
		leyenda1: 'Agregar al carrito',
		leyenda2: 'SIN STOCK'
	}

	return (
		<Card key={props.producto.id} style={{ width: '15rem' }}> 
      <Card.Img variant="top" src={props.producto.imagen} alt={props.producto.nombre}/>
      <Card.Header as="h5"><strong>{props.producto.nombre}</strong></Card.Header>
      <Card.Body>
        <Card.Text>
        <strong>Precio:</strong> $ {props.producto.precio}.-  
        </Card.Text>
        <Card.Text className="text-muted">Disponibles: {props.producto.cantidad}</Card.Text>
      </Card.Body>
			<Card.Footer><BotonCarrito buttonSettings={buttonSettings} /></Card.Footer>
		</Card>
	)
}

export default TarjetaProducto