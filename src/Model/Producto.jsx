class Producto {

    constructor(producto) {
        this.#setEsOferta(producto.esOferta)
        this.#setId(producto.id)
        this.#setNombre(producto.nombre)
        this.#setImagen(producto.imagen)
        this.#setPrecio(producto.precio)
        this.#setCantidad(producto.cantidad)

        this.#setErrores()
    }

    validar() {
        if (this.nombre.length < 5)
            this.errores.push('Nombre de producto inválido')
        if (this.precio < 1)
            this.errores.push('El precio debe ser mayor a 1')
        if (this.cantidad < 0)
            this.errores.push('La cantidad de unidades debe ser mayor a 0')

        return this.errores
    }

    // Setters
    #setId(id) {
        this.id = id != null ? id : 0
    }

    #setNombre(nombre) {
        this.nombre = nombre != null ? nombre : ''
    }

    #setImagen(imagen) {
        this.imagen = imagen != null ? imagen : 'https://picsum.photos/200/300?random=50'
    }

    #setPrecio(precio) {
        this.precio = precio != null ? Number(precio) : 0
    }

    #setCantidad(cantidad) {
        this.cantidad = cantidad != null ? Number(cantidad) : 0
    }

    #setEsOferta(esOferta) {
        this.esOferta = esOferta
    }

    #setErrores() {
        this.errores = []
    }
}

export default Producto