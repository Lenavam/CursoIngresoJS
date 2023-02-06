function mostrar()
{
    let primerNumero;
    let segundoNumero;
    let suma;

    primerNumero = prompt("Ingrese el primer número");
    segundoNumero = prompt("Ingrese el segundo número");

    primerNumero = parseFloat(primerNumero);
    segundoNumero = parseFloat(segundoNumero);

    if (primerNumero == segundoNumero) {

        alert(primerNumero + "" + segundoNumero);

    } else if (primerNumero > segundoNumero) {

        alert(primerNumero - segundoNumero);

    } else if (primerNumero < segundoNumero && (primerNumero + segundoNumero) > 10) {

        suma = primerNumero + segundoNumero;
        
        alert("La suma es " + suma + " y superó el 10");

    } 
}
