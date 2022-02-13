//let image = document.getElementById('imgClickAndChange').onclick= changeImage
//console.log(image)



//function changeImage() {

  
  //if (document.getElementById("imgClickAndChange").src == "img/1SUP.jpg") 
  //{
    //  document.getElementById("imgClickAndChange").src = "img/3SUP.jpg";
 // }
  //else 
  //{
  //  document.getElementById("imgClickAndChange").src = "img/5SUP.jpg";
  // document.getElementById("imgClickAndChange").src = "img/4SUP.jpg";

  //}
//} 

  /*let element = document.getElementById('imgClickAndChange')
console.log(element)
element.onclick= function(){
  let src = element.getAttribute('src');
  element. src="img/3SUP.jpg"
}
switch(src){
  case 'img/1SUP.jpg':
  document.getElementById('imgClickAndChange').src = "img/3SUP.jpg"
  break;
}
*/

document.getElementById('imgClickAndChange').addEventListener('click',() =>{
  let src = document.getElementById('imgClickAndChange').getAttribute('src');


  switch(src){
  case 'img/1SUP.jpg':
  document.getElementById('imgClickAndChange').src = "img/2SUP.jpg"
  break;
  case 'img/2SUP.jpg':
  document.getElementById('imgClickAndChange').src = "img/3SUP.jpg"
  break;
  case 'img/3SUP.jpg':
  document.getElementById('imgClickAndChange').src = "img/4SUP.jpg"
  break;
  case 'img/4SUP.jpg':
  document.getElementById('imgClickAndChange').src = "img/5SUP.jpg"
  break;

  default:
  document.getElementById('imgClickAndChange').src = "img/1SUP.jpg"


}
})