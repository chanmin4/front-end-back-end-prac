const todoform=document.getElementById("todo-form");
const todolist=document.getElementById("todo-list");
const todoinput=document.querySelector("#todo-form input");
let todos=[];
const TODOS_KEY="todos";
function savetodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}
function deletetodo(event){
    const li=event.target.parentElement;
    
    todos=todos.filter((toDo)=>toDo.id!==parseInt(li.id));
    li.remove();
    savetodos()
}
function painttodo(newtodo){
    const li=document.createElement("li");
    li.id=newtodo.id;
    const span=document.createElement("span");
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deletetodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText=newtodo.text;
    todolist.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newtodo=todoinput.value;
    todoinput.value="";
    const newtodoobj={
        text:newtodo,
        id:Date.now()
    };
    todos.push(newtodoobj);
    painttodo(newtodoobj);
    savetodos();
}
todoform.addEventListener("submit",handleToDoSubmit);
const savetodo=localStorage.getItem(TODOS_KEY);
if(savetodo){
    const parsedtodos=JSON.parse(savetodo);
    todos=parsedtodos;
    parsedtodos.forEach(painttodo);

}
