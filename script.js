const textoIngresado = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar(){
	const textoEncriptado = encriptar(textoIngresado.value);
	mensaje.value = textoEncriptado;
	textoIngresado.value = "";
	mensaje.style.backgroundImage = "none";
	mostrarBoton();
	cultarTexto();
}

function encriptar(stringIngresada){
	var matrizLlave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringIngresada = stringIngresada.toLowerCase();
	for (var i = 0; i < matrizLlave.length; i++) {
		if (stringIngresada.includes(matrizLlave[i][0])) {
			stringIngresada = stringIngresada.replaceAll(matrizLlave[i][0], matrizLlave[i][1]);
		}
	}
	return stringIngresada;
}

function botonDesencriptar(){
	const textoDesencriptado = desencriptar(textoIngresado.value);
	mensaje.value = textoDesencriptado;
	textoIngresado.value = "";
	mensaje.style.backgroundImage = "none";
	mostrarBoton();
	cultarTexto()
}

function desencriptar(stringDesencriptada){
	var matrizLlave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringDesencriptada = stringDesencriptada.toLowerCase();
	for (var i = 0; i < matrizLlave.length; i++) {
		if (stringDesencriptada.includes(matrizLlave[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll(matrizLlave[i][1], matrizLlave[i][0]);
		}
	}
	return stringDesencriptada;
}

function botonCopiar(){
	mensaje.select();
	navigator.clipboard.writeText(mensaje.value);
	mensaje.value = "";
	mensaje.style.backgroundImage = "url(imagenes/muñeco.png)";
	ocultarBoton();
	mostrarTexto();
}

function mostrarBoton(){
	document.getElementById("b-copiar").style.display = "inline";
}

function ocultarBoton(){
	document.getElementById("b-copiar").style.display = "none";
}

function mostrarTexto(){
	document.getElementById("texto-informativo").style.display = "inline";
}

function cultarTexto(){
	document.getElementById("texto-informativo").style.display = "none";
}
