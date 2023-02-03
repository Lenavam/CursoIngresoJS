/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
    let nuevaTemp;

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    nuevaTemp = (fahrenheit - 32) / 1.8;

    alert(fahrenheit + " grados Fahrenheit son " + nuevaTemp + " centígrados.");
}

function CentigradosFahrenheit () 
{
    let centigrados;
    let nuevaTemp;

    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    nuevaTemp = centigrados * 1.8 + 32;

    alert(centigrados + "° Centígrados son " + nuevaTemp + "° Fahrenheit.");
}