import Swal from 'sweetalert2';

export default class Mensaje {
	static mostrarSinStock() {
		Swal.fire({
			icon: 'warning',
			title: 'SIN STOCK',
			text: 'No queda stock del producto elegido',
		})}

	static errorCarga(err){
		Swal.fire({
			icon: 'error',
			title: 'ERROR DE CARGA',
			text: 'Algo salió muy mal...',
			footer: err
		})
	}

	static showExitoso(mensaje){
		Swal.fire({
			icon: 'success',
			title: mensaje,
			text: 'Puede cerrar esta ventana'
		})
	}

	static showError(err) {
		Swal.fire({
			icon: 'error',
			title: 'Error en alta',
			text: 'Revise los datos ingresados',
			footer: err
		})
	}
}