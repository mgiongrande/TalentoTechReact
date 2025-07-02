import { createContext, useContext, useState } from "react";
import Utils  from  "../assets/Utils"
import Mensaje from "../assets/Mensaje";
import { parametros } from "../assets/params"

const ProductoContext = createContext()

export const ProductoProvider = ({children}) => {
    const [ productos, setProductos ] = useState([])
    const [ productosFiltrados, setProductosFiltrados ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    const cargarProductos = () => {
        setIsLoading(true)
        if (productos.length === 0) {
            fetch(parametros.urlProductos)
            .then(res => res.json())
            .then(data => {
                setProductos(data ?? [])
                setProductosFiltrados(data ?? [])
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

    const agregarProducto = (producto) => {
        const nuevo = {...producto, id: Utils.getIdMax(productos)}
        setProductos([...productos, nuevo])
    }   

    const modificarProducto = (producto) => 
        setProductos(productos.map(p => p.id === producto.id ? producto : p))

    const borrarProducto = (producto) => {
        if (producto != null)
            setProductos(productos.filter(p => p.id !== producto.id))
    }
    
    return (
        <ProductoContext.Provider
            value={{
                productos,
                isLoading,
                cargarProductos,
                agregarProducto,
                modificarProducto,
                borrarProducto
            }}
        >
            {children}
        </ProductoContext.Provider>
    )
}

export const useProducto = () => useContext(ProductoContext)