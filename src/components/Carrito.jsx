import ItemCarrito from "./ItemCarrito"

const Carrito = (props) => {
	const calcularTotal = () => props.lista.reduce((sum,item) => sum + item.cantidad * item.precio, 0)
	
	return (
		<aside>
			<h1>Carrito..</h1>
			{props.lista.length === 0 ? <h3>No hay productos</h3> : null}
			<div>
				{props.lista.map((item) => (
					<ItemCarrito item={item} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} />
				))}
			</div>
			<h2>Total: {calcularTotal().toFixed(2)}</h2>
		</aside>
	)
}

export default Carrito