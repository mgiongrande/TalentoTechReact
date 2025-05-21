const parametros = 
{
    urlProductos: 'https://68167a0726a599ae7c37fa0f.mockapi.io/api/listaProductos/getProductos',
    urlOfertas: 'https://68167a0726a599ae7c37fa0f.mockapi.io/api/listaProductos/getOfertas',
    tituloProductos: 'Nuestros productos',
    tituloOfertas: 'Nuestras Ofertas',
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