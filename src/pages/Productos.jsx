import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap"
import Cargando from '../components/Cargando'
import ListaProductos from "../components/ListaProductos";
import Paginador from '../components/Paginador'
import { useProducto } from "../context/ProductoContext";
import { parametros } from "../assets/params";
import Buscador from "../components/Buscador";

const Productos = () => {
  const { productos, isLoading, cargarProductos } = useProducto()
  const [ filtro, setFiltro ] = useState('')
  const [ paginaActual, setPaginaActual ] = useState(1)
  
  const indiceUltimoProducto = paginaActual * parametros.productosPorPagina; 
  const indicePrimerProducto = indiceUltimoProducto - parametros.productosPorPagina;
  const productosVisibles = productos.slice(indicePrimerProducto, indiceUltimoProducto);
  const totalPaginas = Math.ceil(productos.length / parametros.productosPorPagina);

  const filtrados = productosVisibles.length > 0 ? productosVisibles.filter(p => p.nombre.toLowerCase().includes(filtro)) : []

  useEffect(() => {
    cargarProductos()
  },[])

  const filtrar = (nombreProducto) => setFiltro(nombreProducto)
  
  if (isLoading) return <Cargando/>

  return (
    <Container className="mt-4 mb-5">
      <Row>
        <h2>{parametros.tituloProductos}</h2>
      <Row>
        <Buscador 
          placeholder='Buscar productos'
          onChange={filtrar} 
        />
      </Row>
      </Row>
      <Row>
        <ListaProductos 
          listaProductos={filtrados}
        />
      </Row>
      <Paginador 
        totalPaginas={totalPaginas}
        paginaActual={paginaActual}
        cambiarPagina={setPaginaActual}
      />
    </Container>
  )
}

export default Productos
