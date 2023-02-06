function mostrar()
{
    let numero1;
    let numero2;

    numero1 = prompt("Ingrese el primero numero");
    numero2 = prompt("Ingrese el segundo numero");

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if (numero1 == numero2) {

        alert(numero1 * numero1);

    } else if (numero1 % numero2 == 0) {

        alert(numero1 - numero2);
        
    } else if (!(numero1 % numero2 == 0) && numero1 % numero2 > 3) {

        alert(numero1 % numero2);

    }
}
