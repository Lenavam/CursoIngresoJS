function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad < 13) {

		alert("Es niño");

	} else {

		if (edad < 18) {

			alert("Es Adolescente")

		} else {
			
			alert("Es Mayor de edad");

		}
	}

}