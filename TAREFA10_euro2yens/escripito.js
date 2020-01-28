/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: aprendendo funcions
	*/
	document.write( '<h1> Aplicacion de conversor de yen a euros o de euros a yen </h1>')
	function e2y(eur){
		return (eur * 122.49) ;

	}
	function y2e(yen){
		return (yen / 122.49) ;

	}





	var contestacion;
	contestacion = true;
	while (contestacion == true) {

		
		var abc;

		abc = prompt("Que moneda quieres: euro o yen?")


		if(abc == "euro"){
			var producto;

			producto = prompt("Que producto has comprado?");

			respostaEuros = prompt("Cuantos euros?");
			euros = parseFloat(respostaEuros);
			var respuesta = e2y (euros);

			document.write(producto +"----------" + euros + " €     " + "----------"+ Number(respuesta).toFixed(2) + "   ¥" + '<br>' );
		}

		else{
			if(abc == "yen")

				var producto1;

			producto1 = prompt("Que producto has comprado?");

			var respostaYen = prompt("Cuantos yen?");
			var yen = parseFloat(respostaYen);
			var respuesta1 = y2e (yen);

			document.write(producto1 +"----------" + yen + "¥      " + "----------"+ Number(respuesta1).toFixed(2) + "   €"+ '<br>' );
		}
		contestacion  = confirm("Outro producto");

		
	}



document.write("CHAO ")



















/*var producto;
producto = prompt("Cuanto cuesta ese producto?");*/



/*var moneda;
moneda = prompt("Euro ou Yen?");*/



/*var numero = parseFloat(precio);
alert(numero);
e2y (numero);
*/