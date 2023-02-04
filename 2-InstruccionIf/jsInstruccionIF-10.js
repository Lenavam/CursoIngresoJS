function mostrar()
{
	let notaRandom;
	let  max = 10;
	let min = 0;

	notaRandom = Math.round(Math.random() * (max - min) + min);

	if (notaRandom >= 9) {
		
		alert(notaRandom + " Pts " + " - " + "EXCELENTE");

	} else if (notaRandom >= 4) {

		alert(notaRandom + " Pts " + " - " + "APROBÓ");

	} else {

		alert(notaRandom + " Pts " + " - " + "Vamos, la próxima se puede");

	}
}