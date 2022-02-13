/**
 * app.js
 * Bonjour 😬
 */

 let element = document.getElementById('app');

 /* 
   Version avec ternaire.
 */
 for(i = 1; i <= 10; i++){
   i === 5 ? element.innerHTML += "<p style=color:red;>Bonjour</p>" : element.innerHTML += "<p>Bonjour</p>";
 }
 
 /* 
   Version avec IF.
 */
 for(i = 1; i <= 10; i++){
   if(i === 5){
     element.innerHTML += "<p style=color:red;>Bonjour</p>" 
   }else{
     element.innerHTML += "<p>Bonjour</p>";
   }
 }
 