function mostrar()
{
    let precio;
    let porcentajeDesuento;
    let precioFinal;

    precio = prompt("Ingrese el precio");
    porcentajeDesuento = prompt("Ingrese el porcentaje");

    precio = parseFloat(precio);
    porcentajeDesuento = parseFloat(porcentajeDesuento);

    precioFinal = precio * porcentajeDesuento / 100;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
