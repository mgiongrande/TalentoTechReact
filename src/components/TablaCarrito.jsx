import { Button, Container, Table, Image } from "react-bootstrap"
import { useCarrito } from "../context/CarritoContext"
import { Trash } from "react-bootstrap-icons"


export const TablaCarrito = () => {
  const { carrito, EliminarItemDeCarrito } = useCarrito()

  return (
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th align="center">Cantidad</th>
            <th>Precio</th>
            <th align="right">Total</th>
            <th></th>
          </tr>
        </thead>
          {carrito.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td valign="middle" align="center"><Image src={item.imagen} height='50' rounded/></td>
                <td valign="middle">{item.nombre}</td>
                <td valign="middle" align="center">{item.cantidad}</td>
                <td valign="middle">$ {item.precio}</td>
                <td valign="middle">$ {(item.cantidad * item.precio).toFixed(2)} </td>
                <td valign="middle" align="center">
                  <Button 
                    variant="outlined-danger"
                    onClick={() => EliminarItemDeCarrito(item.id)}
                  >
                    <Trash/>
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
    </Container>
  )
}