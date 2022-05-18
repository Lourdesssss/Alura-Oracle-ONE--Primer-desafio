/**
 * primero traemos con querryselector todos los elementos del html
 */
let entrada = document.querySelector(".entrada");
let salida = document.querySelector(".salida");
let elementos = document.querySelector(".elementosA");

let botonEncriptar = document.querySelector(".encriptar");

let botonCopiar = document.querySelector(".copiar");

botonEncriptar.addEventListener("click",function(e){
	e.preventDefault();
	const textoEncriptado = encriptar(entrada.value);
	salida.value = textoEncriptado;
	elementos.style.opacity = 0;

});
function encriptar(cadenaTexto){
	let arr = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
	cadenaTexto = cadenaTexto.toLowerCase()
	  for(let i = 0; i < arr.length; i++){
		if(cadenaTexto.includes(arr[i][0])){
			cadenaTexto = cadenaTexto.replaceAll(arr[i][0],arr[i][1])
		}
	  }
	return cadenaTexto
  }