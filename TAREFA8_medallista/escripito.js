/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: aprendendo funcions
*/

function TMedalla(posicion){
	if(posicion == 1)
		{medalla = "medalla de oro";}
	else if (posicion == 2)
		{medalla = "medalla de plata";}
	else if (posicion == 3)
		{medalla = "medalla de bronce";}
	else {medalla = "mala suerte";}

}
var posicion = prompt (" En que puesto quedaste?");
posicion = parseFloat(posicion);

var funcion = TMedalla (posicion);
document.write(posicion + "º");
document.write(medalla);