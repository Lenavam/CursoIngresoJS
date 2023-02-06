
function mostrar()
{
    let medida;
    let perimetro;

    medida = prompt("Ingrese la medida del triángulo equilatero");
    medida = parseFloat(medida);

    perimetro = medida * 3;

    alert("El Perímetro del triángulo es: " + perimetro);
}
