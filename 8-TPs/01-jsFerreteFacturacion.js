/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let product1;
    let product2;
    let product3;
    let sumaTotal;

    product1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    product2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    product3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    sumaTotal = product1 + product2 + product3;

    alert(sumaTotal);

}
function Promedio () 
{
    let product1;
    let product2;
    let product3;
    let promedio;

    product1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    product2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    product3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    promedio = (product1 + product2 + product3) / 3;

    alert(promedio);
}
function PrecioFinal () 
{
    let product1;
    let product2;
    let product3;
    let iva;

    product1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    product2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    product3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    iva = (product1 + product2 + product3) * 0.21;

    alert(iva);
}