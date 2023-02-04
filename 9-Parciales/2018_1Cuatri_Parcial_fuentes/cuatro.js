function mostrar()
{
    let primerNumero;
    let segundoNumero;
    let resta;
    let suma;

    primerNumero = prompt(primerNumero);
    segundoNumero = prompt(segundoNumero);

    primerNumero = parseFloat(primerNumero);
    segundoNumero = parseFloat(segundoNumero);

    if (primerNumero == segundoNumero) {

        alert(primerNumero + "" + segundoNumero);

    } else if (primerNumero > segundoNumero) {

        resta = primerNumero - segundoNumero;

        alert(resta);

    } else if (primerNumero < segundoNumero && (primerNumero + segundoNumero) > 10) {

        suma = primerNumero + segundoNumero;
        
        alert("La suma es " + suma + " y superó el 10");

    } 
}
