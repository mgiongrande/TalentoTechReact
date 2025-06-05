import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Menu from './components/Menu';
import Rutas from './routes/Rutas';
import Footer from './components/Footer';
import { AuthProvider } from "./context/AuthContext"

const App = () => {
  const [productosEnVenta, setProductosEnVenta] = useState([])
  const [productosEnOferta, setProductosEnOferta] = useState([])

  const agregarProducto = (producto) => {
    if (producto.tipoProducto === 'Oferta') {
      const idMax = productosEnOferta.reduce((max, producto) => {
        return (producto.id > max) ? producto.id : max
      }, -Infinity)
      const nuevo = {...producto, id: idMax + 1}
      setProductosEnOferta([...productosEnOferta, nuevo])
    }
    else {
      const idMax = productosEnVenta.reduce((max, producto) => {
        return (producto.id > max) ? producto.id : max
      }, -Infinity)
      const nuevo = {...producto, id: idMax + 1}
      setProductosEnVenta([...productosEnVenta, nuevo])
    }
      
  }

  return (
    <AuthProvider>
      <Router>
        <div>
          <Menu />
          <Rutas 
            productosEnVenta={productosEnVenta}
            productosEnOferta={productosEnOferta} 
            setProductosEnVenta={setProductosEnVenta}
            setProductosEnOferta={setProductosEnOferta}
            agregarProducto={agregarProducto}
          />
          <Footer/>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
