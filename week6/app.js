import TodoController from "./controller/TodoController.js";

const addBtn = document.getElementById("input");
const input = document.querySelector("input"); 

// To Do 항목을 추가합니다.
addBtn.addEventListener('click', () => { 
    const todoController = new TodoController(input.value);
    todoController.addTodo();
}) 