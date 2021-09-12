//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const clearButton = document.querySelector('#clear-button');
const todoList = document.querySelector('.todo-list');
const set1 = new Set();

//event listners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
clearButton.addEventListener('click', clear);

//functions 

function addTodo(event){
    //prevent refresh
    event.preventDefault();
    if(set1.has(todoInput.value) || todoInput.value === ""){
        return;
    }
    set1.add(todoInput.value);
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create li
    const newtoDo = document.createElement('li');
    newtoDo.innerText = todoInput.value;
    newtoDo.classList.add('todo-item');
    todoDiv.appendChild(newtoDo);

    //task deleted
    const remove = document.createElement('button');
    remove.innerHTML = '<i class="far fa-trash-alt"></i>';
    remove.classList.add('delete-button'); 
    todoDiv.appendChild(remove);

    //task completed
    const complete = document.createElement('button');
    complete.innerHTML = '<i class="fas fa-check"></i>';
    complete.classList.add('complete-button'); 
    todoDiv.appendChild(complete);

    //append to the list
    todoList.appendChild(todoDiv);


    todoInput.value = "";
}

function deleteCheck(event){
    event.preventDefault();
    const item = event.target;

    if(item.classList[0] === 'delete-button'){
        const todo = item.parentElement;
        todo.remove();
    }

    else if(item.classList[0] === 'complete-button'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function clear(event){
    event.preventDefault();
    const todos = todoList.childNodes;
    while(todos.length > 0){
        todos[0].remove();
    }
    set1.clear();
}