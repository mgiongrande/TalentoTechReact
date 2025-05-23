import { useContext, useState } from "react"
import { Card } from "react-bootstrap"
import { CarritoContext } from "../context/CarritoContext";
import BotonCarrito from "./BotonCarrito";

const TarjetaProducto = (props) => {
	const { carrito } = useContext(CarritoContext)

	let cantidadEnCarritoPorId = () => {
		let producto = carrito.find((i) => i.id == props.producto.id)

		if (producto == null)
			return 0
		else 
			return producto.cantidad
	}

	const [disponibles, setDisponibles] = useState(props.producto.cantidad - cantidadEnCarritoPorId(props.producto.id))

	const handleClick = (e) => {
		e.preventDefault()

		props.handleAddItemToCart(e.target.producto)
		setDisponibles(disponibles - 1)
	}

	const buttonSettings = {
		condicion: disponibles > 0,
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
			<Card.Text className="text-muted">Disponibles: {disponibles}</Card.Text>
		</Card.Body>
			<Card.Footer><BotonCarrito buttonSettings={buttonSettings} /></Card.Footer>
		</Card>
	)
}

export default TarjetaProducto