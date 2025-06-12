import { useEffect } from "react";
import { Container,  } from "react-bootstrap"
import Cargando from '../components/Cargando'
import ListaProductos from "../components/ListaProductos";

const Productos = (props) => {

  useEffect(() => {
    props.cargarProductos()
  },[])
  
  if (props.isLoading) return <Cargando/>

  return (
    <Container className="mt-4 mb-5">
      <h2>{props.titulo}</h2>
      <ListaProductos 
        listaProductos={props.listaProductos} 
      />
    </Container>
  )
}

export default Productos
