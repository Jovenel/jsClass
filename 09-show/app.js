let array = [
    "Ergy",
    "Steve",
    "Akses",
    "Alexis",
    "Amélie",
    "Bathula",
    "Erwan",
    "Fatimata",
    "jovenel",
    "Marion",
    "Nabil",
    "Sylvia",
    "Vann"
  ];
  let result= document.getElementById('result')
  console.log(result)



for(i=0; i <array.length;i++){
    result.innerHTML+=`<p onclick='show(${i})'>${array[i]}</p>`;
}
const show =(index)=>{ 
alert(array[index])
}

// let y = Math.floor(Math.random() * array.length);
// alert(array[y]);

// corrigé @Amélie 

// let array = [
//   "Ergy",
//   "Steve",
//   "Akses",
//   "Alexis",
//   "Amélie",
//   "Bathula",
//   "Erwan",
//   "Fatimata",
//   "jovenel",
//   "Marion",
//   "Nabil",
//   "Sylvia",
//   "Vann"
// ];


// /* Afficher le contenu de ce tableau 
// créer des alertes dès le clic sur le nom, et afficher alerte "nom"
// */  


// let element = document.getElementById('app');
// //console.log(array)

// for(i = 0; i < array.length; i++){
// //console.log(i)
// element.innerHTML += `<p onclick='show_alert(${i})'>${array[i]}</p>` 

// }

// const show_alert = (index) =>{
// //console.log(index)
// alert(array[index]);
// }
