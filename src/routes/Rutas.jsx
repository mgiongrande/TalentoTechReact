import Principal from "../pages/Principal"
import { Routes, Route} from 'react-router-dom'
import Productos from "../pages/Productos"
import Contacto from "../pages/Contacto"
import Administracion from "../pages/Administración"
import Login from "../pages/Login"
import { parametros } from "../assets/params"
import {RutaProtegida} from '../components/RutaProtegida'
import Ofertas from "../pages/Ofertas"


const Rutas = (props) => {
  return (
    <Routes>
      <Route path='/' element={<Principal/>}/>
      <Route path='/productos' element={
        <Productos 
          setProductos={props.setProductosEnVenta}
          titulo={parametros.tituloProductos}
          url={parametros.urlProductos}
          listaProductos={props.productosEnVenta}
        />}
      />
      <Route path='/ofertas' element={
        <Ofertas 
          setProductos={props.setProductosEnOferta}
          titulo={parametros.tituloOfertas}
          url={parametros.urlOfertas}
          listaProductos={props.productosEnOferta}
        />}
      />
      <Route path='/contacto' element={<Contacto/>}/>
      <Route 
        path='/administracion' 
        element={
          <RutaProtegida>
            <Administracion tipoProducto={parametros.tipoProductos} onAgregar={props.agregarProducto}/>
          </RutaProtegida>}/>
      <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default Rutas