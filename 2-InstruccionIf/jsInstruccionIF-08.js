function mostrar()
{
	let edad;
    let estadoCivil;

    edad = document.getElementById("txtIdEdad").value;
    estadoCivil = document.getElementById("estadoCivil").value;
    
    edad = parseInt(edad);

     if (edad >= 18 && estadoCivil == "Soltero") {

		alert("Es soltero y NO es menor");
      
     }
}