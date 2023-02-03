/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let suma;

	//opción 1
	//numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	//numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	//opcion 2
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	alert("la suma es " + suma);
}


