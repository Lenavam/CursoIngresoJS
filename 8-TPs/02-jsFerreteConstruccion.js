/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    perimetro = (ancho + largo) * 2;

    alambre = (perimetro * 3); 
    
    alert("Se necesitan comprar " + alambre + " metros de alambre");
}
function Circulo () 
{
    let radio;
    let perimetro;
    let alambre;
    const pi = 3.1416;

    radio = parseInt(document.getElementById("txtIdRadio").value);
    
    perimetro = 2 * pi * radio;

    alambre = (perimetro * 3); 
    
    alert("Se necesitan comprar " + alambre + " metros de alambre");
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let cal;
    let cemento;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
   
    area = largo * ancho;

    cal = area * 3;
    cemento = area * 2;
    
    alert("Para hacer un contrapiso de " + largo + "m de largo " + "x " + ancho + "m de ancho," + " se necesitan " + cal + " bolsas de cal y " + cemento + " bolsas de cemento, para un terreno rectangular.");
}