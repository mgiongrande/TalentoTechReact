import Principal from "../pages/Principal"
import { Routes, Route} from 'react-router-dom'
import Productos from "../pages/Productos"
import Contacto from "../pages/Contacto"
import Administracion from "../pages/Administracion"
import Login from "../pages/Login"
import {RutaProtegida} from '../components/RutaProtegida'
import Ofertas from "../pages/Ofertas"


const Rutas = (props) => {
  return (
    <Routes>
      <Route path='/' element={<Principal/>}/>
      <Route path='/productos' element={<Productos />}/>
      <Route path='/ofertas' element={<Ofertas />}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route 
        path='/administracion' 
        element={
          <RutaProtegida>
            <Administracion />
          </RutaProtegida>}/>
      <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default Rutas