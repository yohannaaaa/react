function addTask(){
    let tasks = document.getElementById("tasks");
      let newTd = document.createElement("li");
      let userInput = document.getElementById("userInput").value;
      let node = document.createTextNode(userInput);
      newTd.appendChild(node);
      tasks.appendChild(newTd);
    newTd.setAttribute('id', userInput);
  }
  function removeTask(){
    let tasks = document.getElementById("tasks");
    let userInput = document.getElementById("userInput").value;
    let item = document.getElementById(userInput);
    tasks.removeChild(item);
  }