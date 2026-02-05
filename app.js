// Q1
function showAlert() {
  alert("You clicked the link!");
}

// Q2
function phoneMsg(name) {
  alert("Thanks for purchasing " + name);
}

// Q3
function deleteRow(btn) {
  btn.parentNode.parentNode.remove();
}

function editRow() {
  alert("Edit functionality will be added later!");
}


function changeImg() {
  document.getElementById("jsImg").src =
    "https://thumbs.dreamstime.com/b/d-rendered-javascript-logo-icon-subtle-shadow-isolated-white-background-bright-yellow-square-featuring-letters-js-415675350.jpg";
}

function resetImg() {
  document.getElementById("jsImg").src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1280px-Unofficial_JavaScript_logo_2.svg.png";
}


// Q5
let counter = 0;

function increase() {
  counter++;
  document.getElementById("count").innerHTML = counter;
}

function decrease() {
  counter--;
  document.getElementById("count").innerHTML = counter;
}
