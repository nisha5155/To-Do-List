// Get the required DOM elements
var taskInput = document.getElementById("taskInput");
var addTaskButton = document.getElementById("addTaskButton");
var taskList = document.getElementById("taskList");

// Add event listener to the button
addTaskButton.addEventListener("click", addTask);

function addTask() {
    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        // Create a new list item
        var li = document.createElement("li");
        li.innerText = taskText;

        // Create delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add("delete-button");

        // Add event listener to mark as completed when clicked
        li.addEventListener("click", markAsCompleted);

        // Add event listener to delete task when delete button is clicked
        deleteButton.addEventListener("click", deleteTask);

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Append the new list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}

function markAsCompleted(event) {
    var li = event.target;

    // Toggle the completed class
    li.classList.toggle("completed");
}

function deleteTask(event) {
    var li = event.target.parentNode;
    var ul = li.parentNode;

    // Remove the list item from the task list
    ul.removeChild(li);
}
