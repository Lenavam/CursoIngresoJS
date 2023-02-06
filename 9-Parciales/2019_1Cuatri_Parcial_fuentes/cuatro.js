function mostrar()
{
    let numero1;
    let numero2;
    let resta;

    numero1 = prompt("Ingrese el primer número");
    numero2 = prompt("Ingrese el segundo número");

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if (numero1 == numero2) {

        alert(numero1 + "" + numero2);

    } else if (numero1 < numero2) {

        alert(numero1 + numero2);

    } else if (numero1 > numero2 && (numero1 - numero2) > 10) {

        resta = numero1 - numero2;

        alert("La resta es " + resta + " y superó el 10")
    }
}