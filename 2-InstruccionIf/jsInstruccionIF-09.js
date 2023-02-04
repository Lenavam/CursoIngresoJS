function mostrar()
{
	let numeroRandom;
	let max = 10;
	let min = 0;

	numeroRandom = Math.round(Math.random() * (max - min) + min);

	alert(numeroRandom);

}