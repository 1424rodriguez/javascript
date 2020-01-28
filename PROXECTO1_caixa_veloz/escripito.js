/* 
	Primeira tarefa
	Nome do ficheiro: escripito.js
	Usado: alert()
*/


var elemento1;
var elemento2;
var elemento3;
var numtotal1;
var numtotal2;
var numtotal3;
var totalredondeado;
elemento1 = prompt("Que precio tiene el producto?");

elemento2 = prompt("Que precio tiene el producto?");

elemento3 = prompt("Que precio tiene el producto?");


numtotal1 = parseFloat(elemento1);

numtotal2 = parseFloat(elemento2);

numtotal3 = parseFloat(elemento3);


total = numtotal1 + numtotal2 + numtotal3;

totalredondeado = Number (total).toFixed(2);
document.write(totalredondeado);