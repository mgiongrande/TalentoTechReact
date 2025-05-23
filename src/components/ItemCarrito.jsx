import { Card} from "react-bootstrap"

const ItemCarrito = (props) => {
  return (
    <Card key={props.item.id} style={{ width: '12rem' }} className="mb-4">
      <Card.Img src={props.item.imagen} />
        <Card.Header><strong>{props.item.nombre}</strong></Card.Header>
        <Card.Body>
          <Card.Text>Precio: ${props.item.precio}</Card.Text>
          <Card.Text>Cantidad: {props.item.cantidad}</Card.Text>
        </Card.Body>
        <Card.Footer><strong>Total: ${(props.item.cantidad * props.item.precio).toFixed(2)} </strong></Card.Footer>
    </Card>
	)
}

export default ItemCarrito