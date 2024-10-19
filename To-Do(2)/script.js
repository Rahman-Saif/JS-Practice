const formEl=document.getElementById("form");
const itemsEl=document.getElementById("items");
const textEl=document.getElementById("text");

let draggedItem;


const handleSubmit=(e)=>{
    const item=document.createElement("li");
    const textnode=document.createTextNode(textEl.value);
    item.appendChild(textnode);

    item.setAttribute("class","list-group-item");
    item.setAttribute("name","list");
    item.setAttribute("draggable","true");


    const button=document.createElement("button");
    button.innerHTML="Delete";
    button.style.float="right";
    button.addEventListener("click",deleteTodo);

    item.appendChild(button);
    itemsEl.appendChild(item);

    textEl.value="";
    e.preventDefault();
}


const deleteTodo=(e)=>{
    e.target.parentElement.remove();
}


const handleDragStart=(e)=>{
    draggedItem=e.target;
    e.dataTransfer.effectAllowed='move';
    e.dataTransfer.setData('text/html',draggedItem.innerHTML);
}


const handleDragOver=(e)=>{
    e.preventDefault();
}

const handleDrop=(e)=>{
    e.preventDefault();
    if(e.target!== draggedItem && e.target.classList.contains("list-group-item")){
        if(e.clientY>e.target.getBoundingClientRect().top + (e.target.offsetHeight/2)){
            e.target.parentNode.insertBefore(draggedItem,e.target.nextSibling);
        }else{
            e.target.parentNode.insertBefore(draggedItem,e.target);
        }
    }
    draggedItem=null;
}



itemsEl.addEventListener("dragstart",handleDragStart);
itemsEl.addEventListener("dragover",handleDragOver);
itemsEl.addEventListener("drop",handleDrop);
formEl.addEventListener("submit",handleSubmit);