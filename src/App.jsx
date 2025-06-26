import { BrowserRouter as Router} from 'react-router-dom'
import Menu from './components/Menu';
import Rutas from './routes/Rutas';
import Footer from './components/Footer';
import { AuthProvider } from "./context/AuthContext"
import { ProductoProvider } from './context/ProductoContext';
import { OfertaProvider } from './context/OfertaContext';

const App = () => {
  
  return (
    <AuthProvider>
      <ProductoProvider>
        <OfertaProvider>
          <Router>
            <div>
              <Menu />
              <Rutas />
              <Footer/>
            </div>
          </Router>
        </OfertaProvider>
      </ProductoProvider>
    </AuthProvider>
  )
}

export default App