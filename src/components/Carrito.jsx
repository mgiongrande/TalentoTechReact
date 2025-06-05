import { useCarrito } from "../context/CarritoContext"
import { Button, Container, Modal } from "react-bootstrap"
import { TablaCarrito} from './TablaCarrito'
import Mensaje from "../assets/Mensaje"
import { Cart, Wallet } from "react-bootstrap-icons"

const Carrito = (props) => {
	const { carrito, totalCarrito, vaciarCarrito } = useCarrito()
	
	const handleClick = () => {
		Mensaje.showExitoso('Su compra se procesó con éxito!')
		vaciarCarrito()
		props.handleClose()
	}
	
	return (
		<Modal show={props.show} onHide={props.handleClose}>
			<Modal.Header closeButton>
        <Modal.Title>
					{carrito.length === 0 ? <h3>Esto está MUY vacío</h3> : null}
					{carrito.length > 0 ? <h2>Total: $ {totalCarrito}.-</h2> : null}
				</Modal.Title>
    	</Modal.Header>
			<Container className="mt-2">

				{carrito.length > 0 ? 
				<div className="mt-2">
					<TablaCarrito/>
				</div> : null
				}
				{carrito.length > 0 ? 
				<Modal.Footer>
					<Button variant="outline-dark" onClick={vaciarCarrito}><Cart/> Variar carrito</Button> 
					<Button variant="outline-dark" onClick={handleClick}><Wallet/> Confirmar compra</Button>
				</Modal.Footer> : null}
			</Container>
		</Modal>
	)
}

export default Carrito