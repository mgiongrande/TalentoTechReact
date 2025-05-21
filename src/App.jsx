import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Menu from './components/Menu';
import Rutas from './rutas/Rutas';
import Footer from './components/Footer';
import { parametros} from './assets/params'
import Mensaje from './assets/Mensaje';

const App = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([])
  const [productosEnVenta, setProductosEnVenta] = useState([])
  const [productosEnOferta, setProductosEnOferta] = useState([])

  const handleAddItemToCart = (producto) => {
    setProductosEnCarrito((prev) => {
      const isItemInTheCart = prev.find((i) => i.id === producto.id);
      const lista = producto.esOferta ? productosEnOferta : productosEnVenta
      const hayStock = lista.find((i) => i.id == producto.id && i.cantidad > 0) ? true : false
      if (isItemInTheCart && hayStock) {
        return prev.map((i) =>
          i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      if (!hayStock)
        Mensaje.mostrarSinStock()
      return [...prev, { ...producto, cantidad: 1 }];
    });
    if (producto.esOferta) {
      setProductosEnOferta((prev) => {
        const existeProducto = prev.find((i) => i.id === producto.id)
        const hayStock = productosEnOferta.find((i) => i.id == producto.id && i.cantidad > 0) ? true : false
        if (existeProducto && hayStock)
          return prev.map((i) =>
            i.id === producto.id ? {...i, cantidad: i.cantidad - 1 } : i
          )
        return prev
    })
    } else {
      setProductosEnVenta((prev) => {
        const existeProducto = prev.find((i) => i.id === producto.id)
        const hayStock = productosEnVenta.find((i) => i.id == producto.id && i.cantidad > 0) ? true : false
        if (existeProducto && hayStock)
          return prev.map((i) =>
            i.id === producto.id ? {...i, cantidad: i.cantidad - 1 } : i
          )
        return prev
    })
    }
  };
  
  const handleRemoveItemFromCart = (id) => {
    setProductosEnCarrito((prev) => {
      const foundItem = prev.find((i) => i.id === id);
      if (foundItem) {
        if (foundItem.cantidad === 1) {
          const newArray = prev.filter((i) => i.id !== id);
          return newArray;
        } else {
          return prev.map((i) =>
            i.id === id ? { ...i, cantidad: i.cantidad - 1 } : i
          );
        }
      } else {
        return prev;
      }
    });

      setProductosEnOferta((prev) => {
        const existeProducto = prev.find((i) => i.id === id)
        if (existeProducto)
          return prev.map((i) =>
            i.id === id ? {...i, cantidad: i.cantidad + 1 } : i
          )
        return prev
      })

      setProductosEnVenta((prev) => {
        const existeProducto = prev.find((i) => i.id === id)
        if (existeProducto)
          return prev.map((i) =>
            i.id === id ? {...i, cantidad: i.cantidad + 1 } : i
          )
        return prev
      })
  };

  return (
    <Router>
      <div>
        <Menu 
          productos={productosEnCarrito} 
          lista={productosEnCarrito} 
          handleAddItemToCart={handleAddItemToCart} 
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
        <Rutas 
          productosEnVenta={productosEnVenta}
          productosEnOferta={productosEnOferta} 
          handleAddItemToCart={handleAddItemToCart}
          setProductosEnVenta={setProductosEnVenta}
          setProductosEnOferta={setProductosEnOferta}
          tituloProductos={parametros.tituloProductos}
          tituloOfertas={parametros.tituloOfertas}
          urlProductos={parametros.urlProductos}
          urlOfertas={parametros.urlOfertas}
        />
        <Footer/>
      </div>
    </Router>
  )
}

export default App
