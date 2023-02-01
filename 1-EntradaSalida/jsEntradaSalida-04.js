/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{   // guardar el nombre del usuario en la memoria
	let nombre;
    
	// captación de datos por medio de la funcion prompt que el cliente escribio en la caja de txt
	nombre = prompt('Ingrese su nombre')
    
	// copiar el valor que hay en la variable nombre que el cliente escribio en la caja de txt
	document.getElementById("txtIdNombre").value = nombre;
}

