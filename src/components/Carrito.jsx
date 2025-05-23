import ItemCarrito from "./ItemCarrito"
import { CarritoContext } from "../context/CarritoContext"
import { useContext } from "react"
import { Button, Container } from "react-bootstrap"

const Carrito = () => {
	const { carrito, totalCarrito, vaciarCarrito } = useContext(CarritoContext)
	
	return (
		<Container>
			{carrito.length === 0 ? <h3>Esto está MUY vacío</h3> : null}
			{carrito.length > 0 ? <h2>Total: $ {totalCarrito}.-</h2> : null}
      {carrito.length > 0 ? <Button variant="outline-dark" onClick={vaciarCarrito}>Variar carrito</Button> : null}
			<div className="mt-2">
				{carrito.map((item) => (
					<ItemCarrito item={item}  />
				))}
			</div>
			
		</Container>
	)
}

export default Carrito