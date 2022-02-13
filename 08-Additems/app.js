function add_element() {
    data.push(document.getElementById("text").value);
    display();
  }
  
  function remove_element(index_no) {
    let text = data.splice(index_no, 1);
    display();
  
  }
  function display() {
    let str = "";
    for (i = 0; i < data.length; i++) {
      str +=
        data[i] +
        " <a href=# onClick='remove_element(" +
        data.indexOf(data[i]) +
        ")'> Remove</a> " +
        "<br >";
    }
  
    document.getElementById("display").innerHTML = str;
  }

  