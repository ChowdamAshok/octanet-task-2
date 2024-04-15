let taskCounter = 1;
let tasks = [];

// Load tasks from Local Storage on page load
window.onload = function() {
  loadTasksFromLocalStorage();
  renderTasks();
}

function loadTasksFromLocalStorage() {
  const savedTasks = localStorage.getItem('tasks');
  tasks = savedTasks ? JSON.parse(savedTasks) : [];
  taskCounter = tasks.length + 1;
}

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function saveTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");
  const task = taskInput.value.trim();
  const date = dateInput.value.trim();

  if (!task || !date) {
    alert("Please enter a task and date.");
    return;
  }

  const taskData = { id: taskCounter, task, date, completed: false };
  tasks.push(taskData);
  saveTasksToLocalStorage();
  taskInput.value = "";
  dateInput.value = "";

  taskCounter++;
  renderTasks();
}

function renderTasks() {
  const tasksContainer = document.getElementById("tasksContainer");
  tasksContainer.innerHTML = ""; // Clear previous tasks

  tasks.forEach(taskData => {
    const taskContainer = document.createElement("div");
    taskContainer.className = "task-container";

    const taskNumber = document.createElement("span");
    taskNumber.className = "task-number";
    taskNumber.textContent = taskData.id + ". ";

    const taskElement = document.createElement("span");
    taskElement.textContent = taskData.task + " - " + taskData.date;

    const editButton = document.createElement("button");
    editButton.className = "edit-button";
    editButton.textContent = "Edit";
    editButton.onclick = () => editTask(taskData.id);

    const editIcon = document.createElement("img");
    editIcon.className = "button-icon";
    editIcon.src = "https://cdn-icons-gif.flaticon.com/6454/6454112.gif"; 
    editButton.appendChild(editIcon);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTask(taskData.id);

    const deleteIcon = document.createElement("img");
    deleteIcon.className = "button-icon";
    deleteIcon.src = "https://cdn-icons-gif.flaticon.com/11677/11677485.gif"; // Delete GIF URL
    deleteButton.appendChild(deleteIcon);

    taskContainer.appendChild(taskNumber);
    taskContainer.appendChild(taskElement);
    taskContainer.appendChild(editButton);
    taskContainer.appendChild(deleteButton);

    tasksContainer.appendChild(taskContainer);
  });
}

function editTask(taskId) {
  const taskData = tasks.find(task => task.id === taskId);
  if (!taskData) {
    console.error("Task not found.");
    return;
  }

  const newTask = prompt("Edit task:", taskData.task);
  if (newTask !== null) {
    taskData.task = newTask.trim();
    saveTasksToLocalStorage();
    renderTasks();
  }
}

function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  saveTasksToLocalStorage();
  renderTasks();
}
