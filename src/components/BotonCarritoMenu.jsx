import { Badge, Button } from "react-bootstrap"
import { useCarrito } from "../context/CarritoContext"
import { Cart, CartFill } from "react-bootstrap-icons"

const BotonCarritoMenu = (props) => {
	const { hayItemsEnCarrito, totalItemsEnCarrito } = useCarrito()

	return (
		<>
			{hayItemsEnCarrito ?
				<Button variant="outline-light" onClick={props.handleShow}><CartFill/><Badge className='mx-2' bg='dark'>{totalItemsEnCarrito}</Badge></Button> :
				<Button variant="outline-light" onClick={props.handleShow}><Cart/></Button>
			}
		</>
	)
}

export default BotonCarritoMenu