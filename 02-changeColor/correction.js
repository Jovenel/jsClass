let app = document.getElementById("app");
app.style.width = "100px";
app.style.height = "100px";
app.style.backgroundColor = "red";
app.onclick = changeColor;

function changeColor() {
  if (app.style.backgroundColor === "red") {
    app.style.backgroundColor = "green";
  } else {
    app.style.backgroundColor = "red";
  }
}

/*
/**
 * app.js
 * Change Color
 */
/*
 let element = document.getElementById('app'); 

 element.style.width = "10rem"; 
 element.style.height = "10rem";
 element.style.backgroundColor = "red";*/
 
 /**
  * @addEventListener 
  * Attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé.
  */
 /*
 element.addEventListener('click', () => {
   let color = element.style.backgroundColor;
   switch(color)
   {
     case "red":
       element.style.backgroundColor = "yellow";
       break;
     case "yellow":
       element.style.backgroundColor = "red";
       break;
   }
 })
 
 /*
  * @onclick 
  * Se produit lorsque l'utilisateur clique sur l'élément associé à l'événement.
  */
 /*
  element.onclick = function(){
     let color = element.style.backgroundColor;
     switch(color)
     {
       case "red":
         element.style.backgroundColor = "yellow";
         break;
       case "yellow":
         element.style.backgroundColor = "red";
         break;
     }
   };
 */
 // ------------------------- ERWAN ---------------------------
 /*
 
 let app = document.getElementById("app");
 app.style.width = "100px";
 app.style.height = "100px";
 app.style.backgroundColor = "red";
 app.onclick = changeColor;
 
 function changeColor() {
   if (app.style.backgroundColor === "red") {
     app.style.backgroundColor = "green";
   } else {
     app.style.backgroundColor = "red";
   }
 }
 
 // ------------------------- ALEXIS ---------------------------
 
 /*
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
 };
 
 
 // ------------------------- MARION ---------------------------
 
 /*document.getElementById("app").innerHTML = '<canvas id="essai" width ="1000px" height="500px" style="border:solid black"></canvas>';
 
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
 };
 
  */