import { Button, Container, Image, Table } from "react-bootstrap"
import { Pencil, Trash } from "react-bootstrap-icons"

const TablaProducto = (props) => {

  return (
    <Container className="mx-auto mt-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th align="center">Stock</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
          {props.productos.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td valign="middle" align="center"><Image src={item.imagen} height='50' rounded/></td>
                <td valign="middle">{item.nombre}</td>
                <td valign="middle" align="center">{item.cantidad}</td>
                <td valign="middle">$ {item.precio}</td>
                <td valign="middle" align="center">
                  <Button 
                    variant="outline-dark"
                    onClick={() => props.onUpdate(item)}
                  >
                    <Pencil/>
                  </Button>
                  <Button className="mx-1" 
                    variant="outline-danger"
                    onClick={() => props.onDelete(item)}
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

export default TablaProducto