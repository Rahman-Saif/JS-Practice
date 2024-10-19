const todoInput=document.getElementById("todo-text");
const todoList=document.getElementById("todo-list");

document.addEventListener("DomContentLoaded",getTodoList);

function AddToDo(){
    const todoText=todoInput.value.trim();
    if(todoText == ''){
        alert("Please enter a task");
        return ;
    }

    const todoItem=document.createElement('p');
    todoItem.innerHTML=`${todoText} <button class="delete-btn" onClick="deleteToDO(this)>Delete</button>"`;

    todoList.appendChild(todoItem);
    saveToLocalStorage(todoText);

    todoInput.value='';
}

function saveToLocalStorage(task){
    let todos=localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')):[];
    todos.push(task);
    localStorage.setItem('todos',JSON.stringify(todos));
}

function getTodoList(){
    let todos=localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')):[];
    todos.forEach(task=>{
        const todoItem=document.createElement('p');
        todoItem.innerHTML=`${task} <button class="delete-btn" onClick="deleteToDo(this)">Delete</button>`;
        todoList.appendChild(todoItem);
    })
}