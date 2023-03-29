var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button")

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
// git init
	random.style.background = 
	"linear-gradient(to right, " 
	+ color2.value 
	+ ", " 
	+ color1.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function randomGradient(){
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);

	body.style.background = 
	"linear-gradient(to right, #" 
	+ randomColor1
	+ ", #" 
	+ randomColor2
	+ ")";

	random.style.background = 
	"linear-gradient(to right, #" 
	+ randomColor2
	+ ", #" 
	+ randomColor1 
	+ ")";

	css.textContent = body.style.background + ";";
}
random.addEventListener("click", randomGradient)
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
setGradient()