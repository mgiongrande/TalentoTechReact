import Principal from "../pages/Principal"
import { Routes, Route} from 'react-router-dom'
import Productos from "../pages/Productos"
import Contacto from "../pages/Contacto"
import Administracion from "../pages/Administración"
import Login from "../pages/Login"
import { parametros } from "../assets/params"
import RutaProtegida from '../components/RutaProtegida'

const Rutas = (props) => {
  return (
    <Routes>
      <Route path='/' element={<Principal/>}/>
      <Route path='/productos' element={
        <Productos 
          listaProductos={props.productosEnVenta} 
          handleAddItemToCart={props.handleAddItemToCart}
          setProductos={props.setProductosEnVenta}
          titulo={props.tituloProductos}
          url={props.urlProductos}
        />}
      />
      <Route path='/ofertas' element={
        <Productos 
          listaProductos={props.productosEnOferta} 
          handleAddItemToCart={props.handleAddItemToCart}
          setProductos={props.setProductosEnOferta}
          titulo={props.tituloOfertas}
          url={props.urlOfertas}
        />}
      />
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/administracion' element={<RutaProtegida><Administracion tipoProducto={parametros.tipoProductos}/></RutaProtegida>}/>
      <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default Rutas