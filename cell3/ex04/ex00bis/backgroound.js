$(function() {
	$("button").click(function(){
		let hexadecimal = "0123456789ABCDEF"
		let color_code = "#";
		for (let i = 0; i < 6; i++)
			color_code += hexadecimal[Math.floor(Math.random()*10)];
		$("div").css("background-color",color_code);
	})
})