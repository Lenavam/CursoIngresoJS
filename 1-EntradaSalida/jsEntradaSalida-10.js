/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importeInicial;
	let importeFinal;
	let descuento;

	importeInicial = txtIdImporte.value;

	importeInicial = parseInt(importeFinal);

	importeFinal = importeInicial * 0.25;
	descuento = importeInicial - importeFinal;

	txtIdResultado.value = descuento;
}