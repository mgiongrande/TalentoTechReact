import { useEffect } from "react";
import { Container,  } from "react-bootstrap"
import Cargando from '../components/Cargando'
import ListaProductos from "../components/ListaProductos";
import { useProducto } from "../context/ProductoContext";
import { parametros } from "../assets/params";

const Productos = () => {
  const { productos, isLoading, cargarProductos } = useProducto()
  
  useEffect(() => {
    cargarProductos()
  },[])
  
  if (isLoading) return <Cargando/>

  return (
    <Container className="mt-4 mb-5">
      <h2>{parametros.tituloProductos}</h2>
      <ListaProductos 
        listaProductos={productos} 
      />
    </Container>
  )
}

export default Productos
