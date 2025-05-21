import { useState } from "react"
import { Card } from "react-bootstrap"
import Swal from 'sweetalert2';
import BotonCarrito from "./BotonCarrito";

const TarjetaProducto = (props) => {
	const [disponibles, setDisponibles] = useState(props.producto.cantidad)

	const handleClick = (e) => {
		e.preventDefault()

		// Valido cantidad disponible

		if (disponibles === 0) {
			Swal.fire({
				icon: 'error',
				title: 'Producto sin stock',
				text: 'No quedan unidades disponibles del producto'
			})
			return
		}
		props.handleAddItemToCart(e.target.producto)
		setDisponibles(disponibles - 1)
	}

	const buttonSettings = {
		condicion: props.producto.cantidad > 0,
		handleClick: handleClick,
		leyenda1: 'Agregar al carrito',
		leyenda2: 'SIN STOCK'
	}

	return (
		<Card key={props.producto.id} className="mb-2" style={{ width: '18rem' }}> 
			<Card.Img variant="top" src={props.producto.imagen} alt={props.producto.nombre}/>
			<Card.Header as='h5'>{props.producto.nombre}</Card.Header>
			<Card.Body>Precio: $ {props.producto.precio}</Card.Body>
			<Card.Footer className="text-muted">Disponibles: {props.producto.cantidad}</Card.Footer>
			<Card.Footer><BotonCarrito buttonSettings={buttonSettings} /></Card.Footer>
		</Card>
	)
}

export default TarjetaProducto