import { Button, ButtonGroup } from "react-bootstrap"
import { CartDash, CartPlus } from "react-bootstrap-icons"

const ItemCarrito = (props) => {
	return (
		<aside>
		<div className="itemCart">
			<div>
				<h3>{props.item.nombre}</h3>
				<div className="itemInfo">
					<p>Precio: ${props.item.precio}</p>
					<p>Total: ${(props.item.cantidad * props.item.precio).toFixed(2)}</p>
				</div>
				<div className="buttons">
					<ButtonGroup>
						<Button onClick={() => props.handleRemoveItemFromCart(props.item.id)}>
							<CartDash/>
						</Button>	
						<Button onClick={() => props.handleAddItemToCart(props.item)}>
							<CartPlus/>
						</Button>
					</ButtonGroup>
					<p>Cantidad: {props.item.cantidad} </p>
				</div>
			</div>
			<img src={props.item.imagen} />
		</div>
		</aside>
	)
}

export default ItemCarrito
