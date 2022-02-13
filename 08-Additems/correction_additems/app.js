let element = document.getElementById('app');
let content = document.getElementById('content');
let button = document.getElementById('add');

let array = [];

button.addEventListener('click', (event) => {
  event.preventDefault();
  array.push(content.value);
  show();
})

const refresh = () => {
  element.innerHTML = "";
  content.value = "";
}

const show = () => {
  refresh();
  for(let i=0; i < array.length; i++){
    element.innerHTML += `
      <div class='items'> 
        ${array[i]}
        <button id="delete" onclick="deleteItem(${i})" >delete</button> 
      </div>
    `
  }
}

const deleteItem = (i) => {
  array.splice(i, 1);
  show()
}