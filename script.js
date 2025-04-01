let tasks = ["Milk", "Eggs", "Bread", "Apples"];
let list = document.querySelector(".list");

function displayTasks() {
  list.innerHTML = ""; 
  tasks.forEach(task => {
    list.innerHTML += `<li>${task}</li>`;
  });
}

displayTasks();

function addTask() {
  let newTaskInput = document.querySelector(".action input");
  let newTask = newTaskInput.value.trim();

  if (newTask) {
    tasks.push(newTask);
    displayTasks(); 
    newTaskInput.value = ""; 
  } else {
    alert("Please enter a grocery item");
  }
}
