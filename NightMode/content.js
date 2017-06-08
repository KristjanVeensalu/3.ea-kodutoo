var color = localStorage.bgColor;
var input;
var divs;
var links;

window.onload=function(){
	console.log(color);
	console.log("rgb("+Math.round(128-((hexToRgb(color).r/2)))+", "+Math.round(128-((hexToRgb(color).g/2)))+", "+Math.round(128-((hexToRgb(color).b/2)))+")");
	links = document.getElementsByClassName("spf-link");
	for(var i=0;i<links.length;i++){
		links[i].style.background = color;	
		links[i].style.color = "rgb("+Math.round(128-((hexToRgb(color).r/2)))+", "+Math.round(128-((hexToRgb(color).g/2)))+", "+Math.round(128-((hexToRgb(color).b/2)))+")";	
	}
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
	for(var i=0;i<links.length;i++){
		links[i].style.background = color;
		links[i].style.color = "rgb("+Math.round(128-((hexToRgb(color).r/2)))+", "+Math.round(128-((hexToRgb(color).g/2)))+", "+Math.round(128-((hexToRgb(color).b/2)))+")";	
	}
	document.body.style.background = color;
	for(var i=0;i<divs.length;i++){
		divs[i].style.background = color;	
	}
	console.log(color);
	console.log("rgb("+Math.round(128-((hexToRgb(color).r/2)))+", "+Math.round(128-((hexToRgb(color).g/2)))+", "+Math.round(128-((hexToRgb(color).b/2)))+")");
	localStorage.bgColor = color;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
	}

