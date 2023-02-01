/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let ingreseSueldo;
	let resultado;
	let importeFinal;
	let aumento;

	ingreseSueldo = txtIdSueldo.value;
	resultado = txtIdResultado.value;

	ingreseSueldo = parseInt(ingreseSueldo);

	importeFinal = ingreseSueldo * 0.10;

	aumento = ingreseSueldo + importeFinal;
	//Tener como ej el ejercicio 10
	txtIdResultado.value = aumento;
}
