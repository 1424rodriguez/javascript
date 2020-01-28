/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

function sumita(a, b){
    document.write(a+b);
}
function restita(a, b){
    document.write(a-b);
}
function multiplicacioncita(a, b){
    document.write(a*b);
}

var respConta = prompt ("Que operación? + - x");

var resp1 = prompt ("O teu primeiro num:");
resp1 = parseFloat(resp1);

var resp2 = prompt ("O teu segundo num:");
resp2 = parseFloat(resp2);

if(respConta == "+")
{
	sumita(resp1,resp2);
}


if  (respConta == "-")
{restita(resp1,resp2)}


if(respConta == "x")
{multiplicacioncita(resp1,resp2)}

