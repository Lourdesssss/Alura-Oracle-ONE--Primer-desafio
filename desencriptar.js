let entrada = document.querySelector(".entrada");
let salida = document.querySelector(".salida");
let elementos = document.querySelector(".elementosA");

let botonDesencriptar = document.querySelector(".desencriptar");


botonDesencriptar.addEventListener("click",function(event){
	event.preventDefault();
	const textoDesencriptado = desencriptar(entrada.value);
	salida.value = textoDesencriptado;
	elementos.style.opacity = 0;

});
function desencriptar (cadenaTextoCifrado){
	let arr =[["ai", "a"] , ["enter", "e"] , ["imes", "i"] , ["ober", "o"] , ["ufat", "u"]];
	cadenaTextoCifrado = cadenaTextoCifrado.toLowerCase();
	for(i = 0; i < arr.length; i++){
		if (cadenaTextoCifrado.includes(arr[i][0])){
			cadenaTextoCifrado = cadenaTextoCifrado.replaceAll(arr[i][0]),(arr[i][1]);
		}
		return cadenaTextoCifrado;
	}
   
}