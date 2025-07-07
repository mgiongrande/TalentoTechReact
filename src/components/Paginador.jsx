import { Button } from "react-bootstrap"
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons"

const Paginador = ({ totalPaginas, paginaActual, cambiarPagina }) => {
  
  const irAPagina = (numeroPagina) => {
    if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
      cambiarPagina(numeroPagina);
    }
  }
  
  return (
    <div className="d-flex justify-content-center mt-4 flex-wrap">
      <Button
        variant="outline-dark"
        className="mx-1 mb-2"
        size="sm"
        disabled={paginaActual === 1}
        onClick={() => irAPagina(paginaActual - 1)}
      >
        <ArrowLeft />
      </Button>
      {Array.from({ length: totalPaginas }, (_, indice) => (
        <Button
          key={indice + 1}
          variant={paginaActual === indice + 1 ? 'dark' : 'outline-dark'}
          className="mx-1 mb-2"
          size="sm"
          onClick={() => irAPagina(indice + 1)}
        >
          {indice + 1}
        </Button>
      ))}
      <Button
        variant="outline-dark"
        className="mx-1 mb-2"
        size="sm"
        disabled={paginaActual === totalPaginas}
        onClick={() => irAPagina(paginaActual + 1)}
      >
        <ArrowRight />
      </Button>
    </div>
  )
}

export default Paginador