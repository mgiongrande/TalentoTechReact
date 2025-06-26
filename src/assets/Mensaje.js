import Swal from 'sweetalert2';

export default class Mensaje {
	static mostrarSinStock() {
		Swal.fire({
			icon: 'warning',
			title: 'SIN STOCK',
			text: 'No queda stock del producto elegido',
		})
	}

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

	static showConsulta(evento) {
		Swal.fire({
			title: "Está seguro que desea eliminar el item?",
			text: "Esto no se puede revertir.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "SI",
			cancelButtonText: "NO",
			reverseButtons: true,
			preConfirm: evento,
			customClass: {
				confirmButton: "btn btn-outline-success",
				cancelButton: "btn btn-outline-danger"
			},
			//buttonsStyling: false,
			}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Eliminado",
					text: "El item ha sido eliminado.",
					icon: "success"
				});
			}
		});
	}
		
}