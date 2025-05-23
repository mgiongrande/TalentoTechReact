import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Menu from './components/Menu';
import Rutas from './rutas/Rutas';
import Footer from './components/Footer';

const App = () => {
  const [productosEnVenta, setProductosEnVenta] = useState([])
  const [productosEnOferta, setProductosEnOferta] = useState([])

  return (
    <Router>
      <div>
        <Menu />
        <Rutas 
          productosEnVenta={productosEnVenta}
          productosEnOferta={productosEnOferta} 
          setProductosEnVenta={setProductosEnVenta}
          setProductosEnOferta={setProductosEnOferta}
        />
        <Footer/>
      </div>
    </Router>
  )
}

export default App
