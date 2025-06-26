export default class Utils {
    
    static getIdMax = (lista) => {
        const max = lista.reduce((max, producto) => {
            return (producto.id > max) ? producto.id : max
        }, -Infinity)
            return max + 1
    }
}