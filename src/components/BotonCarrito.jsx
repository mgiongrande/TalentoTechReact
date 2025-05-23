import { Button } from "react-bootstrap"
import { CartPlus, XSquare } from "react-bootstrap-icons"

const BotonCarrito = (props) => {
	return (
		props.buttonSettings.condicion ? 
			<Button variant="outline-dark" onClick={props.buttonSettings.handleClick}><CartPlus/> {props.buttonSettings.leyenda1}</Button> : 
			<Button variant="secondary" disabled><XSquare/> {props.buttonSettings.leyenda2}</Button>
	)
}

export default BotonCarrito