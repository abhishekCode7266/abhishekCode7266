const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let editTodo = null;

// Add Todo
const addTodo = () => {
    const inputText = inputBox.value.trim();

    if (inputText === "") {
        alert("You must write something in your to do!");
        return;
    }

    // Edit Todo
    if (addBtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = inputText;
        updateLocalTodos();
        addBtn.value = "Add";
        inputBox.value = "";
        return;
    }

    // Create List Item
    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    saveLocalTodos();

    inputBox.value = "";
};

// Edit / Delete Todo
const updateTodo = (e) => {

    if (e.target.innerHTML === "Remove") {
        e.target.parentElement.remove();
        saveLocalTodos();
    }

    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;
    }
};

// Save Todos
const saveLocalTodos = () => {

    let todos = [];

    document.querySelectorAll("#todoList li p").forEach((item) => {
        todos.push(item.innerHTML);
    });

    localStorage.setItem("todos", JSON.stringify(todos));
};

// Load Todos
const getLocalTodos = () => {

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.forEach((todo) => {

        const li = document.createElement("li");

        const p = document.createElement("p");
        p.innerHTML = todo;
        li.appendChild(p);

        // Edit Button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });
};

// Events
document.addEventListener("DOMContentLoaded", getLocalTodos);
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);
