import { useEffect } from "react";
import { Container,  } from "react-bootstrap"
import Cargando from '../components/Cargando'
import ListaProductos from "../components/ListaProductos";
import { useOferta } from "../context/OfertaContext";

const Ofertas = (props) => {
  const { ofertas, isLoading, cargarOfertas } = useOferta()

  useEffect(() => {
    cargarOfertas()
  },[])
  
  if (isLoading) return <Cargando/>

  return (
    <Container className="mt-4 mb-5">
      <h2>{props.titulo}</h2>
      <ListaProductos listaProductos={ofertas}/>
    </Container>
  )
}

export default Ofertas