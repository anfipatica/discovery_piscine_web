const button1 = document.getElementById("button1");
function generateColor() {
	const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
		let code = "";
		for(let i=0; i<6; i++){
			code += hexArray[Math.floor(Math.random()*16)];
			console.log(code);
		}
		return `#${code}`
}

button1.addEventListener("click", function() {
	document.getElementById("box").style.backgroundColor =  generateColor();
});

//Math.random devuelve un número entre 0 y 1. Nos devuelve 0.4236
//Lo multiplicamos por 16, 0.4236 = devuelve 6.7776
//Math.floor redondea decimales a enteros: 6.7776 se convierte en 7.
//Buscamos la posición 7 del array para obtener una cifra hexadecimal.
//Repetimos el proceso 6 veces y obtenemos un codigo de color hexadecimal pseudoaleatorio.