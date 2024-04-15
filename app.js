let taskCounter = 1;
let tasks = [];

// Load tasks from Local Storage on page load
window.onload = function() {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(function(taskData) {
    addTaskToDOM(taskData);
  });
  taskCounter = tasks.length + 1;
}

function saveTask() {
  var taskInput = document.getElementById("taskInput");
  var dateInput = document.getElementById("dateInput");
  var task = taskInput.value;
  var date = dateInput.value;

  if (task.trim() === "" || date.trim() === "") {
    alert("Please enter a task and date.");
    return;
  }

  var taskData = { id: taskCounter, task: task, date: date };
  addTaskToDOM(taskData);
  tasks.push(taskData);
  saveTasksToLocalStorage();

  taskInput.value = "";
  dateInput.value = "";

  taskCounter++;
}

function addTaskToDOM(taskData) {
  var taskContainer = document.createElement("div");
  taskContainer.className = "task-container";
  taskContainer.setAttribute('data-id', taskData.id);

  var taskNumber = document.createElement("span");
  taskNumber.className = "task-number";
  taskNumber.textContent = taskData.id + ". ";

  var taskElement = document.createElement("span");
  taskElement.textContent = taskData.task + " - " + taskData.date;

  var editButton = document.createElement("button");
  editButton.className = "edit-button";
  editButton.onclick = function() {
    editTask(taskElement, taskData);
  };

  var editIcon = document.createElement("img");
  editIcon.src = "https://cdn-icons-gif.flaticon.com/6454/6454112.gif";
  editIcon.className = "button-icon";
  editButton.appendChild(editIcon);

  var deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.onclick = function() {
    deleteTask(taskContainer, taskData);
  };

  var deleteIcon = document.createElement("img");
  deleteIcon.src = "https://cdn-icons-gif.flaticon.com/11677/11677485.gif"; 
  deleteIcon.className = "button-icon";
  deleteButton.appendChild(deleteIcon);

  taskContainer.appendChild(taskNumber);
  taskContainer.appendChild(taskElement);
  taskContainer.appendChild(editButton);
  taskContainer.appendChild(deleteButton);

  document.getElementById("tasksContainer").appendChild(taskContainer);
}

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editTask(taskElement, taskData) {
  var newTask = prompt("Edit task:", taskData.task);
  if (newTask !== null) {
    taskElement.textContent = newTask + " - " + taskData.date;
    taskData.task = newTask;
    saveTasksToLocalStorage();
  }
}

function deleteTask(taskContainer, taskData) {
  if (confirm("Are you sure you want to delete this task?")) {
    taskContainer.remove();
    tasks = tasks.filter(function(task) {
      return task.id !== taskData.id;
    });
    saveTasksToLocalStorage();
    updateTaskNumbers();
  }
}

function updateTaskNumbers() {
  var taskContainers = document.querySelectorAll(".task-container");
  taskCounter = 1;
  taskContainers.forEach(function(taskContainer) {
    var taskNumber = taskContainer.querySelector(".task-number");
    taskNumber.textContent = taskCounter + ". ";
    taskCounter++;
  });
}
let taskCounter = 1;
let tasks = [];

// Load tasks from Local Storage on page load
window.onload = function() {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(function(taskData) {
    addTaskToDOM(taskData);
  });
  taskCounter = tasks.length + 1;
}

function saveTask() {
  var taskInput = document.getElementById("taskInput");
  var dateInput = document.getElementById("dateInput");
  var task = taskInput.value;
  var date = dateInput.value;

  if (task.trim() === "" || date.trim() === "") {
    alert("Please enter a task and date.");
    return;
  }

  var taskData = { id: taskCounter, task: task, date: date };
  addTaskToDOM(taskData);
  tasks.push(taskData);
  saveTasksToLocalStorage();

  taskInput.value = "";
  dateInput.value = "";

  taskCounter++;
}

function addTaskToDOM(taskData) {
  var taskContainer = document.createElement("div");
  taskContainer.className = "task-container";
  taskContainer.setAttribute('data-id', taskData.id);

  var taskNumber = document.createElement("span");
  taskNumber.className = "task-number";
  taskNumber.textContent = taskData.id + ". ";

  var taskElement = document.createElement("span");
  taskElement.textContent = taskData.task + " - " + taskData.date;

  var editButton = document.createElement("button");
  editButton.className = "edit-button";
  editButton.onclick = function() {
    editTask(taskElement, taskData);
  };

  var editIcon = document.createElement("img");
  editIcon.src = "https://cdn-icons-gif.flaticon.com/6454/6454112.gif";
  editIcon.className = "button-icon";
  editButton.appendChild(editIcon);

  var deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.onclick = function() {
    deleteTask(taskContainer, taskData);
  };

  var deleteIcon = document.createElement("img");
  deleteIcon.src = "https://cdn-icons-gif.flaticon.com/11677/11677485.gif"; 
  deleteIcon.className = "button-icon";
  deleteButton.appendChild(deleteIcon);

  taskContainer.appendChild(taskNumber);
  taskContainer.appendChild(taskElement);
  taskContainer.appendChild(editButton);
  taskContainer.appendChild(deleteButton);

  document.getElementById("tasksContainer").appendChild(taskContainer);
}

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editTask(taskElement, taskData) {
  var newTask = prompt("Edit task:", taskData.task);
  if (newTask !== null) {
    taskElement.textContent = newTask + " - " + taskData.date;
    taskData.task = newTask;
    saveTasksToLocalStorage();
  }
}

function deleteTask(taskContainer, taskData) {
  if (confirm("Are you sure you want to delete this task?")) {
    taskContainer.remove();
    tasks = tasks.filter(function(task) {
      return task.id !== taskData.id;
    });
    saveTasksToLocalStorage();
    updateTaskNumbers();
  }
}

function updateTaskNumbers() {
  var taskContainers = document.querySelectorAll(".task-container");
  taskCounter = 1;
  taskContainers.forEach(function(taskContainer) {
    var taskNumber = taskContainer.querySelector(".task-number");
    taskNumber.textContent = taskCounter + ". ";
    taskCounter++;
  });
}
