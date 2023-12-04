let res = document.querySelector('h1');
let add = document.getElementById('add');
let sub = document.getElementById('subtract');
let mul = document.getElementById('multiply');
let div = document.getElementById('divide');

add.addEventListener("click", function(){
    let userInput = document.getElementById('userInput').value;
    let userInput1 = document.getElementById('userInput1').value;
    let result = parseInt(userInput) + parseInt(userInput1);
    res.innerText = result;
})

sub.addEventListener("click", function(){
    let userInput = document.getElementById('userInput').value;
    let userInput1 = document.getElementById('userInput1').value;
    let result = userInput - userInput1;
    res.innerText = result;
})

mul.addEventListener("click", function(){
    let userInput = document.getElementById('userInput').value;
    let userInput1 = document.getElementById('userInput1').value;
    let result = userInput * userInput1;
    res.innerText = result;
})

div.addEventListener("click", function(){
    let userInput = document.getElementById('userInput').value;
    let userInput1 = document.getElementById('userInput1').value;
    let result = userInput / userInput1;
    res.innerText = result;
})