var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var dificultad = 1;
var score = 0;
document.getElementById("score").innerHTML = score;
var inputPalabra = document.getElementById("inputPalabra");
inputPalabra.focus();
var mensaje = document.getElementById("mensaje");
var tiempo = document.getElementById("tiempo");
var cuentaRegresiva = 5;
tiempo.innerHTML = cuentaRegresiva;

var crearPalabra = function(){
	var palabra = '';
	for(var i = 0; i < dificultad; i++){
		palabra += letras[Math.floor(Math.random() * letras.length)];
	}
	document.getElementById("palabra").innerHTML = palabra;
}

crearPalabra();

var actualizarTiempo = function(){
	cuentaRegresiva -= 1;
	if(cuentaRegresiva == 0){
		if(score<=5){
			mensaje.innerHTML = "Seguí participando";
		}
		else if(score<=10){
			mensaje.innerHTML = "Podés hacerlo mejor";
		}
		else if(score<=15){
			mensaje.innerHTML = "Muy bien! Seguí practicando!";
		}
		else if(score<=20){
			mensaje.innerHTML = "Tremendoooooo!!!";
		}
		else if(score<=25){
			mensaje.innerHTML = "C R A C K!";
		}
		else if(score<=30){
			mensaje.innerHTML = "Sos el Dios de las palabras!";
		}
		else if(score<=35){
			mensaje.innerHTML = "DE QUÉ PLANETA VINISTEEEEE?!?!?!?";
		}
		else if(score<=40){
			mensaje.innerHTML = "Ah nooooooooooooooooooo!!! Corramos!!! Sos Skynet!!!";
		}
		else if(score>40){
			mensaje.innerHTML = "El Messi de las letras! Es solo gatorei!!!";
		}
		mensaje.style.color = "orange";
		mensaje.style.fontSize = "xx-large";
		document.getElementById("score").style.color = "green";
		document.getElementById("score").style.fontSize = "xx-large";
		clearInterval(tiempoInterval);
	}
	tiempo.innerHTML = cuentaRegresiva;
}

var tiempoInterval = setInterval(function(){actualizarTiempo();}, 1000);

var compara = function(){
	if(cuentaRegresiva != 0){
		if(inputPalabra.value.length == dificultad){
		if(inputPalabra.value == palabra.innerHTML){
			mensaje.innerHTML = "Bien!";
			mensaje.style.color = "green";
			score += 1;
			if(score % 5 == 0){
				dificultad += 2;
			};
			cuentaRegresiva = 5;
			document.getElementById("score").innerHTML = score;
			crearPalabra();
			inputPalabra.value = '';
			inputPalabra.focus();
		}
		else{
			mensaje.innerHTML = "Mal";
			mensaje.style.color = "red";
			inputPalabra.value = '';
			inputPalabra.focus();
		}
		}
		else if(inputPalabra.value.length > dificultad){
			mensaje.innerHTML = "Mal";
			mensaje.style.color = "red";
			inputPalabra.value = '';
			inputPalabra.focus();
		}
	}
}
