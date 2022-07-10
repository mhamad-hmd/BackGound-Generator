
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rndmBtn = document.querySelector(".rndClr"); 




function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function clrGradienting (clr1, clr2) {
	body.style.background=
	"linear-gradient(to right, "
	+clr1
	+", "
	+clr2
	+")";
	css.textContent = body.style.background + ";";
}



function clrGradient(){
	
	clrGradienting(color1.value, color2.value);

}

function rndmColorGenerator(){

	var randomColor1 = getRandomColor();
	var randomColor2 = getRandomColor();
	
	clrGradienting(randomColor1, randomColor2);
}


rndmBtn.addEventListener("click", rndmColorGenerator);
color1.addEventListener("input", clrGradient );
color2.addEventListener("input", clrGradient );


