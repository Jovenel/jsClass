/*const square = document.getElementById("app");

square.style.backgroundColor = "red";
square.style.height = "500px";
square.style.width = "500px";

square.addEventListener("click", function () {
  if (this.style.backgroundColor === "red") {
    square.style.backgroundColor = "green";
  } else {
    square.style.backgroundColor = "red";
  }
})


}*/

const carre = document.getElementById ('app');
carre.style.height = '500px'; 
carre.style.width = '500px';
carre.style.backgroundColor = "red";

/*document.getElementById ('app').onclick = function () {
document.getElementById ('app').style.backgroundColor = "yellow";
}*/

carre.onclick= changeColor
 function changeColor() {
   if (carre.style.backgroundColor === "red") {
     carre.style.backgroundColor = "blue";
   } else {
     carre.style.backgroundColor = "red";
   }
 }
 /* @Alexis 
 let element = document.getElementById("app");
element.style.height = "100px";
element.style.width = "100px";
element.style.backgroundColor = "red";

let i = 0;
let colors = ["blue", "red"];

document.getElementById("app").onclick = function () {
  document.getElementById("app").style.backgroundColor = colors[i];
  i++;
  if (i == colors.length) i = 0;
};*/

/*
@Marion 
document.getElementById("app").innerHTML =
  '<canvas id="essai" width ="1000px" height="500px" style="border:solid black"></canvas>';

var canvas = document.getElementById("essai");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 100, 100);

let redorblue = "red";

document.getElementById("essai").onclick = function () {
  if (redorblue == "red") {
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 100, 100);
    redorblue = "blue";
  } else if (redorblue == "blue") {
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 100, 100);
    redorblue = "red";
  } else {
    alert("Woopsie, c'est pas censé faire ça !");
  }
};*/