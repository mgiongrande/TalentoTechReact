import { createContext, useState } from "react";

export const CarritoContext = createContext()

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

    const vaciarCarrito = () => setCarrito([])

    const totalCarrito = carrito.reduce((sum,item) => sum + item.cantidad * item.precio, 0).toFixed(2)

    const hayItemsEnCarrito = (carrito.length > 0)

    return (
        <CarritoContext.Provider value={{carrito, agregarItemACarrito, vaciarCarrito, totalCarrito, hayItemsEnCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}