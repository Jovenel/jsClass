// function myMove() {
//     const elem = document.getElementById("bleu1");
//     const elem2 = document.getElementById("bleu2");
//     const elem3 = document.getElementById("bleu3");
//     const elem4 = document.getElementById("bleu4");

//     console.log(elem)
//     elem.style.top='200px'
//     elem2.style.top='200px'
//     elem3.style.top='200px'
//     elem4.style.top='200px'
    
//   }

let rectangle = document.querySelectorAll('.rectangle'); // let rectangle = document.getElementsByClassName('.rectangle');
let button = document.getElementById('button');

button.addEventListener('click', move);

let count = 0;

function move(){
  count++
  if(count === 1) {
    for(let i = 0; i < rectangle.length; i++){
      i % 2 === 0 ? rectangle[i].style.marginTop = "200px" : "";
    }
  }else if(count === 2){
    for(let i = 0; i < rectangle.length; i++){
      i % 2 === 0 ? rectangle[i].style.marginTop = "0rem" : "";
    }
    count = 0;
  }
}

// @Bathula
//   let buttons = document.getElementsByClassName("button");
//   let move = document.getElementById("move");
//   //console.log(buttons);
  
//   move.addEventListener("click", function () {
//     for (let i = 0; i < buttons.length; i++) {
//       if (buttons[i].innerHTML % 2 == 0) {
//         console.log("hello");
//         buttons[i].classList.add("new");
//       }
//     }
//   });
  
//   move.addEventListener("dblclick", function () {
//     for (let i = 0; i < buttons.length; i++) {
//       if (buttons[i].innerHTML % 2 == 0) {
//         console.log("hello");
//         buttons[i].classList.remove("new");
//       }
//     }
//   });
  

// @Alexis  
//let button = document.getElementById("button");
// let move = 50;

// button.addEventListener("click", () => {
//   if (bloc2.style.top == "50px") {
//     bloc2.style.top = "0px";
//   } else {
//     bloc2.style.top = move + "px";
//   }
//   if (bloc4.style.top == "50px") {
//     bloc4.style.top = "0px";
//   } else {
//     bloc4.style.top = move + "px";
//   }
//   if (bloc6.style.top == "50px") {
//     bloc6.style.top = "0px";
//   } else {
//     bloc6.style.top = move + "px";
//   }
//   if (bloc8.style.top == "50px") {
//     bloc8.style.top = "0px";
//   } else {
//     bloc8.style.top = move + "px";
//   }
// });