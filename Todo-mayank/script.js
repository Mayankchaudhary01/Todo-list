// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskValue = taskInput.value.trim();
    
    if (taskValue === '') {
        alert("Please enter a task");
        return;
    }

    // Create new task element
    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <span>${taskValue}</span>
        <button class="deleteBtn">Delete</button>
    `;

    // Append task to list
    taskList.appendChild(newTask);

    // Clear input field
    taskInput.value = '';

    // Add delete functionality to the task
    const deleteBtn = newTask.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });
}

// Add task on button click
addTaskBtn.addEventListener('click', addTask);

// Add task on pressing "Enter" key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
