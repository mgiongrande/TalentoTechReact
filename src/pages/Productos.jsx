import { useEffect } from "react";
import { Container,  } from "react-bootstrap"
import Cargando from '../components/Cargando'
import ListaProductos from "../components/ListaProductos";
import { useProducto } from "../context/ProductoContext";

const Productos = (props) => {
  const { productos, isLoading, cargarProductos } = useProducto()
  
  useEffect(() => {
    cargarProductos()
  },[])
  
  if (isLoading) return <Cargando/>

  return (
    <Container className="mt-4 mb-5">
      <h2>{props.titulo}</h2>
      <ListaProductos 
        listaProductos={productos} 
      />
    </Container>
  )
}

export default Productos
