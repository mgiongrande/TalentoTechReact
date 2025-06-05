import { createContext, useContext, useState } from "react";

const CarritoContext = createContext()

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const agregarItemACarrito = (item) => {
        setCarrito((prev) => {
            const estaEnCarrito = prev.find((i) => i.id == item.id)
            if (!estaEnCarrito) {
                return [...prev, {...item, cantidad: 1}]
            }
            else {
                return prev.map((i) =>
                i.id === item.id ? {...i, cantidad: i.cantidad + 1 } : i)
            }
        })
    }

    const EliminarItemDeCarrito = (id) => {
        
        setCarrito((prev) => {
            const cantidad = carrito.find(p => p.id === id).cantidad
            if (cantidad > 1)
                return prev.map((i) => i.id === id ? {...i, cantidad: i.cantidad - 1} : i)
            else
                return prev.filter(p => p.id !== id)
        })
    }

    const vaciarCarrito = () => setCarrito([])

    const totalCarrito = carrito.reduce((sum,item) => sum + item.cantidad * item.precio, 0).toFixed(2)

    const hayItemsEnCarrito = (carrito.length > 0)

    const cantidadEnCarritoPorId = (id) => {
		let producto = carrito.find((i) => i.id == id)

		if (producto == null)
			return 0
		else 
			return Number(producto.cantidad)
	}

    return (
        <CarritoContext.Provider 
            value={{
                carrito, 
                agregarItemACarrito, 
                vaciarCarrito, 
                totalCarrito, 
                hayItemsEnCarrito, 
                cantidadEnCarritoPorId,
                EliminarItemDeCarrito}}
            >
            {children}
        </CarritoContext.Provider>
    )
}

export const useCarrito = () => useContext(CarritoContext)