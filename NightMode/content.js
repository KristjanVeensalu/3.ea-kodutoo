var color = localStorage.bgColor;
var input;
var divs;

window.onload=function(){
	console.log(color);
	document.body.style.background = color;
	divs = document.getElementsByTagName("div");
	for(var i=0;i<divs.length;i++){
		divs[i].style.background = color;	
	}
	
	
	input = document.createElement("input");
	document.getElementById("yt-masthead-content").appendChild(input); 
	input.type = "color";
	input.value = "#000000"
	input.addEventListener("change", setBgColor)
}

function setBgColor(){
	color = input.value;
	console.log(color);
	document.body.style.background = color;
	for(var i=0;i<divs.length;i++){
		divs[i].style.background = color;	
	}	
	localStorage.bgColor = color;
}

