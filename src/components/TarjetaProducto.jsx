import { Card, Col, Container, Form, Row } from "react-bootstrap"
import { useCarrito } from "../context/CarritoContext";
import BotonCarrito from "./BotonCarrito";
import Mensaje from "../assets/Mensaje";
import { useState } from "react";

const TarjetaProducto = (props) => {
	const { cantidadEnCarritoPorId, agregarItemACarrito } = useCarrito()
	const [ cantidad, setCantidad] = useState(0)

	const handleClick = (producto) => {
		console.log(producto)
		if (cantidad > Number(producto.cantidad)) {
			Mensaje.mostrarSinStock()
		} else {
			producto.seleccionadas = Number(cantidad)
			agregarItemACarrito(producto)
			setCantidad(0)
		}
	}

	const hayStock = () => (props.producto.cantidad - cantidadEnCarritoPorId(props.producto.id)) > 0

	const handleChange = (e) => setCantidad(e.target.value)

	const buttonSettings = {
		condicion: hayStock(),
		handleClick: () => handleClick(props.producto),
		leyenda1: 'Agregar',
		leyenda2: 'SIN STOCK',
		cantidad: cantidad
	}

	return (
		<Container>
		<Card key={props.producto.id} style={{ width: '15rem' }} className="h-100 d-flex flex-column mb-2"> 
		<Card.Img 
			variant="top" 
			src={props.producto.imagen} 
			alt={props.producto.nombre}
			className="card-img-top img-fluid"
			style={{height: '200px', objectFit: 'cover'}}
		/>
		<Card.Header as="h5"><strong>{props.producto.nombre}</strong></Card.Header>
		<Card.Body>
			<Card.Text>
				<strong>Precio:</strong> $ {props.producto.precio}.-  
			</Card.Text>
			<Card.Text className="text-muted">Disponibles: {props.producto.cantidad - cantidadEnCarritoPorId(props.producto.id)}</Card.Text>
		</Card.Body>
			<Card.Footer>
				<Row>
					{hayStock() ? 
					<Col md={5}>
						<Form.Control
							type="number"
							max={props.producto.cantidad}
							min={1}
							value={cantidad}
							onChange={handleChange}
							className="mt-1 mb-1"
						/>
					</Col> : null }
					<Col md='auto' className="justify-content-md-center">
						<BotonCarrito buttonSettings={buttonSettings} />
					</Col>
				</Row>
			</Card.Footer>
		</Card>
		</Container>
	)
}

export default TarjetaProducto