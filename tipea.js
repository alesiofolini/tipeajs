var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var dificultad = 1;
var score = 0;
document.getElementById("score").innerHTML = score;
var inputPalabra = document.getElementById("inputPalabra");
inputPalabra.focus();
var mensaje = document.getElementById("mensaje");

var crearPalabra = function(){
	var palabra = '';
	for(var i = 0; i < dificultad; i++){
		palabra += letras[Math.floor(Math.random() * letras.length)];
	}
	document.getElementById("palabra").innerHTML = palabra;
}

crearPalabra();

var compara = function(){
	if(inputPalabra.value.length == dificultad){
		if(inputPalabra.value == palabra.innerHTML){
			mensaje.innerHTML = "Bien!";
			score += 1;
			document.getElementById("score").innerHTML = score;
			crearPalabra();
			inputPalabra.value = '';
			inputPalabra.focus();
		}
		else{
			mensaje.innerHTML = "Mal";
			inputPalabra.value = '';
			inputPalabra.focus();
		}
	}
	else{
		mensaje.innerHTML = "Mal";
		inputPalabra.value = '';
		inputPalabra.focus();
	}
}