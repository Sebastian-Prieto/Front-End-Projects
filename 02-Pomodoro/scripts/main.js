// 1. Define variables
const tasks = []; // Array with tasks
let time = 0; // Variable with countdown
let timer = null; // Timer with setInterval
let timerBreak = null; // Timer with setInterval for the break
let current = null; // Actual task in execution

// 2. Define which elements we will be using - DOM
const form = document.getElementById("form");
const inputTask = document.getElementById("inputTask");
const addButton = document.getElementById("addButton");

// 3. Add event listener
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents the page from reloading
  if (inputTask.value != "") {
    createTask(inputTask.value); // Create task through a function that recives the value
    inputTask.value = ""; // Empty the inputTask
    renderTasks(); // Render the tasks
  }
});

// 4. Functions
function createTask(value) {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(3), // Random number basically
    title: value, // Value is the title of the task
    completed: false, // Task is not completed
  };
  tasks.unshift(newTask); // Add the new task at the beginning of the array
}

// 5. Render the tasks
function renderTasks() {
  const html = tasks.map((task) => {
    // Map through the array and return the HTML for each task
    return ` 
            <div class="task">
                <div class="completed">${
                  task.completed
                    ? `<span class="done">Done!</span>`
                    : `<button class="start-button" data-id="${task.id}">Start!</button`
                }</div>
                <div class="title">${task.title}</div>
            </div>
        `; // If the task is completed, return the span with the text Done!
    // If the task is not completed, return the button with the text Start!
  });
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = html.join(""); // Join the array of HTML and return it
}

// capitalizeFirstLetter
function capitalizeFirstLetter() {
    // Obtén el voidInput del inputTask
    let voidInput = inputTask.value;

    // Verifica si el voidInput no está vacío
    if (voidInput.length > 0) {
        // Convierte la primera letra a mayúscula y el resto a minúscula
        voidInput = voidInput.charAt(0).toUpperCase() + voidInput.slice(1).toLowerCase();

        // Establece el voidInput capitalizado en el inputTask
        inputTask.value = voidInput;
    }
}
