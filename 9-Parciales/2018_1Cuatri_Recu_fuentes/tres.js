function mostrar()
{
    let precio;
    let porcentaje;
    let descuento;

    precio = prompt("Ingrese el precio");
    porcentaje = prompt("Ingrese el porcentaje");

    precio = parseFloat(precio);
    porcentaje = parseFloat(porcentaje);

    descuento = precio * porcentaje / 100;

    document.getElementById("elPrecioFinal").value = descuento;
}
