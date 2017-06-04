window.onload=function(){
document.getElementById("button1").addEventListener('click', saveSetchangeColor);
document.getElementById("button2").addEventListener('click', loadSet);
}


function saveSetchangeColor(){
	var color = document.getElementById("backgroundColor").value
	localStorage.Bcolor=color;
	var html = document.getElementsByTagName('html')[0];
	html.style.setProperty("--color", localStorage.Bcolor)
	console.log("Success")
    };

function loadSet(){
	var lastColor = localStorage.Bcolor;

	if (lastColor == "White"){
		console.log("White")
	}

}


