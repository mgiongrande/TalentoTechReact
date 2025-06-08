import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Menu from './components/Menu';
import Rutas from './routes/Rutas';
import Footer from './components/Footer';
import { AuthProvider } from "./context/AuthContext"
import Mensaje from './assets/Mensaje';
import { parametros } from "./assets/params"

const App = () => {
  const [ productosEnVenta, setProductosEnVenta ] = useState([])
  const [ productosEnOferta, setProductosEnOferta ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  const agregarProducto = (producto) => {
    if (producto.tipoProducto === 'Oferta') {
      const nuevo = {...producto, id: getIdMax(productosEnOferta, producto)}
      setProductosEnOferta([...productosEnOferta, nuevo])
    }
    else {
      const nuevo = {...producto, id: getIdMax(productosEnVenta, producto)}
      setProductosEnVenta([...productosEnVenta, nuevo])
    }
  }

  const modificarProducto = (producto) => {
    if (producto.esOferta)
      setProductosEnOferta(productosEnOferta.map(p => p.id === producto.id ? producto : p))
    else
      setProductosEnVenta(productosEnVenta.map(p => p.id === producto.id ? producto : p))
  }

  const getIdMax = (lista,producto) => {
    const max = lista.reduce((max, producto) => {
      return (producto.id > max) ? producto.id : max
    }, -Infinity)
    return max + 1
  } 

  const cargarProductos = () => {
    setIsLoading(true)
    if (productosEnVenta.length === 0) {
      fetch(parametros.urlProductos)
      .then(res => res.json())
      .then(data => {
        setProductosEnVenta(data)
      })
      .catch(err => {
        Mensaje.errorCarga(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
    }
    else setIsLoading(false)
  }

  const cargarOfertas = () => {
    setIsLoading(true)
    if (productosEnOferta.length === 0) {
      fetch(parametros.urlOfertas)
      .then(res => res.json())
      .then(data => {
        setProductosEnOferta(data)
      })
      .catch(err => {
        Mensaje.errorCarga(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
    }
    else setIsLoading(false)
  }

  const borrarProducto = (producto) => {
    if (producto.esOferta)
      setProductosEnOferta(productosEnOferta.filter(p => p.id !== producto.id))
    else
      setProductosEnVenta(productosEnVenta.filter(p => p.id !== producto.id))
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
            modificarProducto={modificarProducto}
            borrarProducto={borrarProducto}
            cargarProductos={cargarProductos}
            cargarOfertas={cargarOfertas}
            isLoading={isLoading}
          />
          <Footer/>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
