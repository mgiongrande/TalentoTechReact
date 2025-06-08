import { useEffect } from "react";
import { Container,  } from "react-bootstrap"
import Cargando from '../components/Cargando'
import ListaProductos from "../components/ListaProductos";
import { useCarrito } from "../context/CarritoContext";

const Ofertas = (props) => {
  const { agregarItemACarrito } = useCarrito()

  useEffect(() => {
    props.cargarProductos()
  },[])
  
  if (props.isLoading) return <Cargando/>

  return (
    <Container className="mt-4 mb-5">
      <h2>{props.titulo}</h2>
      <ListaProductos listaProductos={props.listaProductos} handleAddItemToCart={agregarItemACarrito} />
    </Container>
  )
}

export default Ofertas