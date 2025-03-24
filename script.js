let tasks = ["Complete project", "Go to the gym", "Buy groceries", "Read a book"];
let list = document.querySelector(".list");
function displayTasks() {
  tasks.forEach(task => {
    list.innerHTML += `<li>${task}</li>`;
  });
}
displayTasks();
function addTask() {
  let newTask = document.querySelector(".action input").value;
  if (newTask) {
    tasks.push(newTask);
    displayTasks();
    document.querySelector(".action input").value = "";
  } else {
    alert("Please enter a task");
  }
}
