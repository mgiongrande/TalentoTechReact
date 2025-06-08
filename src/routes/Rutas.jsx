import Principal from "../pages/Principal"
import { Routes, Route} from 'react-router-dom'
import Productos from "../pages/Productos"
import Contacto from "../pages/Contacto"
import Administracion from "../pages/Administracion"
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
          cargarProductos={props.cargarProductos}
          isLoading={props.isLoading}
        />}
      />
      <Route path='/ofertas' element={
        <Ofertas 
          setProductos={props.setProductosEnOferta}
          titulo={parametros.tituloOfertas}
          url={parametros.urlOfertas}
          listaProductos={props.productosEnOferta}
          cargarProductos={props.cargarOfertas}
          isLoading={props.isLoading}
        />}
      />
      <Route path='/contacto' element={<Contacto/>}/>
      <Route 
        path='/administracion' 
        element={
          <RutaProtegida>
            <Administracion 
              onAgregar={props.agregarProducto}
              onUpdate={props.modificarProducto}
              onDelete={props.borrarProducto}
              productosEnVenta={props.productosEnVenta}
              productosEnOferta={props.productosEnOferta}
              cargarProductos={props.cargarProductos}
              cargarOfertas={props.cargarOfertas}
              isLoading={props.isLoading}
            />
          </RutaProtegida>}/>
      <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default Rutas