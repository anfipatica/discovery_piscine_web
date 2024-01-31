//$("selector").action

//$("h1").hide();

/*$(document).ready(function() { Con esto nos aseguramos de que el documento haya cargado entero.
})*/

$(function() { //Una manera resumida de escribir lo anterior

	let n = 10;

	$("p").css({"background-color":"rgb(200,180,169)"})
	$(".primero").css({"font-size":"20px"})
	$("#segundo").css({"font-family":"monospace"})

	$("button").click(function(){
		$(".primero").cdd({"font-size":n+"px"})
	})

	

})