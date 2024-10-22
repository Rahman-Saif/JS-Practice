let home=document.getElementById("home");
let contact=document.getElementById("contact");
let blog=document.getElementById("blog");
let bannerHeading1=document.getElementById("bannerHeading");
let bannerText1=document.getElementById("bannerText");
let bannerButtonText1=document.getElementById("bannerButtonText");

const navItems=document.querySelectorAll("#navbar li");
const navbar=document.getElementById("navbar");
let draggedItem=null;

document.addEventListener("DOMContentLoaded",()=>{
    let navItem1=localStorage.getItem("navItem1");
    let navItem2=localStorage.getItem("navItem2");
    let navItem3=localStorage.getItem("navItem3");

    let bannerHeading=localStorage.getItem("bannerHeading");
    let bannerDescription=localStorage.getItem("bannerDescription");
    let bannerbuttonText=localStorage.getItem("bannerbuttonText");

    console.log(bannerHeading);
    home.innerHTML=navItem1;
    contact.innerHTML=navItem2;
    blog.innerHTML=navItem3;
    bannerHeading1.innerHTML=bannerHeading;
    bannerText1.innerHTML=bannerDescription;
    bannerButtonText1.innerHTML=bannerbuttonText;
    
})

navItems.forEach((item)=>{
    item.addEventListener("dragstart",()=>{
        draggedItem=item;
        setTimeout(()=>item.classList.add("dragging"),0)
    })

    item.addEventListener("dragend",()=>{
        setTimeout(()=>{
            draggedItem.classList.remove("dragging");
            draggedItem=null;
        },0)
    })
})

navbar.addEventListener("dragover",(e)=>{
    e.preventDefault();
    const afterElement=getNextElement(navbar,e.clientX);
    const draggingElement=document.querySelector(".dragging");

    if(afterElement == null){
        navbar.appendChild(draggingElement);
    }else{
        navbar.insertBefore(draggingElement,afterElement);
    }
})

function getNextElement(navbar,x){
    const items=[...navbar.querySelectorAll("li:not(.dragging)")];

    return items.find(item=>{
        const box=item.getBoundingClientRect();
        return x<box.left+box.width/2;
    })
}



