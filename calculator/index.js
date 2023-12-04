let res = document.querySelector("h1");
let sub = document.getElementById("Sub");
let add = document.getElementById("Add");
let div = document.getElementById("Div");
let mul = document.getElementById("Mul");

function subtraction(){
    let userInput = document.getElementById('userInput').value;
    let userInput2 = document.getElementById('userInput2').value;
    let result = userInput - userInput2;
    res.innerText = result;
  }

  function addition(){
    let userInput = document.getElementById('userInput').value;
    let userInput2 = document.getElementById('userInput2').value;
    let result = parseInt(userInput) + parseInt(userInput2);
    res.innerText = result;
  }

  function division(){
    let userInput = document.getElementById('userInput').value;
    let userInput2 = document.getElementById('userInput2').value;
    let result = userInput / userInput2;
    res.innerText = result;
  }

  function multiplication(){
    let userInput = document.getElementById('userInput').value;
    let userInput2 = document.getElementById('userInput2').value;
    let result = userInput * userInput2;
    res.innerText = result;
  }

add.addEventListener("click", addition)
sub.addEventListener("click", subtraction)
div.addEventListener("click", division)
mul.addEventListener("click", multiplication)