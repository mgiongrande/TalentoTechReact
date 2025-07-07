import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap"
import Cargando from '../components/Cargando'
import ListaProductos from "../components/ListaProductos";
import Paginador from '../components/Paginador'
import { useOferta } from "../context/OfertaContext";
import { parametros } from "../assets/params";
import Buscador from "../components/Buscador";

const Ofertas = () => {
  const { ofertas, isLoading, cargarOfertas } = useOferta()
  const [ filtro, setFiltro ] = useState('')
  const [ paginaActual, setPaginaActual ] = useState(1)

  const indiceUltimoProducto = paginaActual * parametros.productosPorPagina; 
  const indicePrimerProducto = indiceUltimoProducto - parametros.productosPorPagina;
  const productosVisibles = ofertas.slice(indicePrimerProducto, indiceUltimoProducto);
  const totalPaginas = Math.ceil(ofertas.length / parametros.productosPorPagina);

  const filtrados = productosVisibles.length > 0 ? productosVisibles.filter(p => p.nombre.toLowerCase().includes(filtro)) : []

  useEffect(() => {
    cargarOfertas()
  },[])

  const filtrar = (nombreProducto) => setFiltro(nombreProducto)
  
  if (isLoading) return <Cargando/>

  return (
    <Container className="mt-4 mb-5">
      <Row>
        <h2>{parametros.tituloOfertas}</h2>
      <Row>
        <Buscador
          placeholder='Buscar ofertas'
          onChange={filtrar} 
        />
      </Row>
      </Row>
      <Row>
        <ListaProductos 
          listaProductos={filtrados}
        />
      <Paginador 
        totalPaginas={totalPaginas}
        paginaActual={paginaActual}
        cambiarPagina={setPaginaActual}
      />
      </Row>
    </Container>
  )
}

export default Ofertas