/*Afficher dix fois bonjour avec une boucle et faite en sorte que le 5eme bonjour soit de couleur rouge par exemple
version avec if & ternaire attendu sans utiliser document.write*/

// version corrigé
let element = document.getElementById('app');

for(i = 1; i <= 10; i++){
  i === 5 ? element.innerHTML += "<p style=color:red;>Bonjour</p>" : element.innerHTML += "<p>Bonjour</p>";
}
/*
for(i = 1; i <= 10; i++){
  if(i === 5 ){
    element.innerHTML += "<p style=color:red;>Bonjour</p>" 
  }else{
    element.innerHTML += "<p>Bonjour</p>";
  }
}
*/

/*function d(arg){
    document.write(arg);
    }

    function message(text) {
        let l = 1
        while(l <= 10)
      {
        if(l === 5)
        {
          d('<span style=\'color:red;\' >'+text.toLocaleUpperCase() + '</span><br>')
          d('<hr>'); 
        }
        else{
          d(text + '<br>')
          d('<hr>');
        }
        l++
      }
      d('<h1> Version ternaire </h1>')
      for(let l = 1; l <= 10; l++){
        l === 5 ? d('<span style=\'color:red;\' >'+text.toLocaleUpperCase() + '</span><br>') : d(text + '<br>');
      }
    }
      message("Boujour")*/

      
    
  