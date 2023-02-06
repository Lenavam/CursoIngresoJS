function mostrar()
{
    let nombreHombre;
    let nombreMujer;
    let pesoHombre;
    let pesoMujer;
    let sumaPesos;
    let promedioPesos;

    nombreHombre = prompt("Ingrese nombre y apellido del hombre");
    pesoHombre = prompt("Ingrese el peso en Kg del hombre");
    nombreMujer = prompt("Ingrese nombre y apellido de la mujer");
    pesoMujer = prompt("Ingrese el peso en Kg de la mujer");

    pesoHombre = parseFloat(pesoHombre);
    pesoMujer = parseFloat(pesoMujer);

    sumaPesos = pesoHombre + pesoMujer;

    promedioPesos = (pesoHombre + pesoMujer) / 2

    alert("Ustedes se llaman " + nombreHombre + " y " + nombreMujer + ", pesan " + pesoHombre + "Kg y " + pesoMujer + "Kg ," + " que sumados son " + sumaPesos + "Kg " + "y el promedio de peso es " + promedioPesos + "Kg");
}
