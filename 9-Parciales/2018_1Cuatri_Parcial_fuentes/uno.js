
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = prompt("Escriba el ancho del rectángulo");
    largo = prompt("Escriba el largo de un rectángulo");

    ancho = parseFloat(ancho);
    largo = parseFloat(largo);

    perimetro = (ancho + largo) * 2;

    alert("Perímetro: " + perimetro);
}