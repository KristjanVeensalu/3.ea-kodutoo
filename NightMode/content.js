var color = localStorage.bgColor;
var textColor = "black";
var input = document.createElement("input");
var divs = document.getElementsByTagName("div");
var links = document.getElementsByClassName("spf-link");
var title = document.getElementById("eow-title");
var comments = document.getElementsByClassName("comment-section-renderer-items");

window.onload=function(){
	createElement();
	start();
}

function start(){
	getTextColor();
	
	for(var i=0;i<links.length;i++){
		links[i].style.background = color;	
		links[i].style.color = textColor;	
	}
	if(title != null){
		title.style.color = textColor;
	}
	for(var i=0;i<comments.length;i++){
		comments[i].style.color = textColor;
	}
	document.body.style.background = color;
	for(var i=0;i<divs.length;i++){
		divs[i].style.background = color;	
	}
}

function getTextColor(){
	var rgbSum = hexToRgb(color).r+hexToRgb(color).g+hexToRgb(color).b;
	console.log(rgbSum);
	if(rgbSum<360){
		textColor = "white";
	}else{
		textColor = "black";
	}
}

function createElement(){
	document.getElementById("yt-masthead-content").appendChild(input); 
	input.type = "color";
	input.value = "#000000"
	input.addEventListener("change", setBgColor)
}

function setBgColor(){
	color = input.value;
	getTextColor();
	for(var i=0;i<links.length;i++){
		links[i].style.background = color;
		links[i].style.color = textColor;	
	}
	if(title != null){
		title.style.color = textColor;
	}
	if(comments != null){
		for(var i=0;i<comments.length;i++){
			comments[i].style.color = textColor;
		}
	}
	document.body.style.background = color;
	for(var i=0;i<divs.length;i++){
		divs[i].style.background = color;	
	}
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

