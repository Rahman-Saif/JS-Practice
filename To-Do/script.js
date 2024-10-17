let inputfield=document.getElementById('taskInput');
let button=document.getElementById('submit');
let result=document.getElementById('result');



function checkFunc(e){
    e.preventDefault();
    let div=document.createElement('div');
    div.innerHTML=`
        <span>${inputfield.value}</span>
        <button class="delete-btn">Delete</button>
    `
    result.appendChild(div);
    document.querySelector(".delete-btn")
    .addEventListener("click",()=>{
        div.remove();
    })



}









button.addEventListener("click",checkFunc);