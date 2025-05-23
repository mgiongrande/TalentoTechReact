import { useContext, useEffect, useState } from "react";
import { Container,  } from "react-bootstrap"
import Cargando from '../components/Cargando'
import Mensaje from "../assets/Mensaje";
import ListaProductos from "../components/ListaProductos";
import { CarritoContext } from "../context/CarritoContext";

const Ofertas = (props) => {
  const [ isLoading, setIsLoading] = useState(true)
  const { agregarItemACarrito } = useContext(CarritoContext)

  useEffect(() => 
  {
    fetch(props.url)
    .then(res => res.json())
    .then(data => {
      props.setProductos(data)
    })
    .catch(err => {
      Mensaje.errorCarga(err)
    })
    .finally(() => {
      setIsLoading(false)
    })
  },[])
  
  if (isLoading) return <Cargando/>

  return (
    <Container className="mt-4 mb-5">
      <h2>{props.titulo}</h2>
      <ListaProductos listaProductos={props.listaProductos} handleAddItemToCart={agregarItemACarrito} />
    </Container>
  )
}

export default Ofertas