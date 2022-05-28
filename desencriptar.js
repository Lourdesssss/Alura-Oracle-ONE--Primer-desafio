let entradas = document.querySelector(".entradas");
let salidas = document.querySelector(".salidas");
let elements = document.querySelector(".elementsA");

let botonDesencriptar = document.querySelector(".desencriptar");


botonDesencriptar.addEventListener("click",function(event){
	event.preventDefault();
	const textoDesencriptado = desencriptar(entradas.value);
	salidas.value = textoDesencriptado;
	elements.style.opacity = 0;

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