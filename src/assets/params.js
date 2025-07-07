const parametros = 
{
    urlProductos: 'https://686c42d214219674dcc7a78f.mockapi.io/ultimateECommerceSite/productos',
    urlOfertas: 'https://686c42d214219674dcc7a78f.mockapi.io/ultimateECommerceSite/ofertas',
    tituloProductos: 'Nuestros productos',
    tituloOfertas: 'Nuestras Ofertas',
    productosPorPagina: 8,
    tipoProductos: [
        {
            id: 1,
            tipo: 'Producto',
            esOferta: false
        },
        {   
            id: 2,
            tipo: 'Oferta',
            esOferta: true
        }
    ]
}

export { parametros }