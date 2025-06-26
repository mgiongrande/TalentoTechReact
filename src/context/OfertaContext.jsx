import { createContext, useContext, useState } from "react";
import Utils  from  "../assets/Utils"
import Mensaje from "../assets/Mensaje";
import { parametros } from "../assets/params"

const OfertaContext = createContext()

export const OfertaProvider = ({children}) => {
    const [ ofertas, setOfertas ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    const cargarOfertas = () => {
        setIsLoading(true)
        if (ofertas.length === 0) {
            fetch(parametros.urlOfertas)
            .then(res => res.json())
            .then(data => {
                setOfertas(data ?? [])
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

    const agregarOferta = (producto) => {
        const nuevo = {...producto, id: Utils.getIdMax(ofertas)}
        setOfertas([...ofertas, nuevo])
    }   

    const modificarOferta = (producto) => 
        setOfertas(ofertas.map(p => p.id === producto.id ? producto : p))

    const borrarOferta = (producto) => 
        setOfertas(ofertas.filter(p => p.id !== producto.id))
    
    return (
        <OfertaContext.Provider
            value={{
                ofertas,
                isLoading,
                cargarOfertas,
                agregarOferta,
                modificarOferta,
                borrarOferta
            }}
        >
            {children}
        </OfertaContext.Provider>
    )
}

export const useOferta = () => useContext(OfertaContext)