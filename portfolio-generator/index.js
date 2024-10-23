let home=document.getElementById("home");
let contact=document.getElementById("contact");
let blog=document.getElementById("blog");
let bannerHeading1=document.getElementById("bannerHeading");
let bannerText1=document.getElementById("bannerText");
let bannerButtonText1=document.getElementById("bannerButtonText");

let firstUniname=document.getElementById("first_uni_name");
let secondUniname=document.getElementById("second_uni_name");
let thirdUniname=document.getElementById("third_uni_name");

let firstUnidesc=document.getElementById("first_uni_desc");
let secondUnidesc=document.getElementById("second_uni_desc");
let thirdUnidesc=document.getElementById("third_uni_desc");

let firstSkill=document.getElementById("skill1");
let secondSkill=document.getElementById("skill2");
let thirdSkill=document.getElementById("skill3");
let fourthSkill=document.getElementById("skill4");

let firstProficiency=document.getElementById("progress1");
let secondProficiency=document.getElementById("progress2");
let thirdProficiency=document.getElementById("progress3");
let fourthProficiency=document.getElementById("progress4");


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

    let firstSchool=localStorage.getItem("firstSchool");
    let secondSchool=localStorage.getItem("secondSchool");
    let thirdSchool=localStorage.getItem("thirdSchool");
    let firstDesc=localStorage.getItem("firstDesc");
    let secondDesc=localStorage.getItem("secondDesc");
    let thirdDesc=localStorage.getItem("thirdDesc");

    let first_skill=localStorage.getItem("first_skill");
    let second_skill=localStorage.getItem("second_skill");
    let third_skill=localStorage.getItem("third_skill");
    let fourth_skill=localStorage.getItem("fourth_skill");

    let first_proficiency=localStorage.getItem("first_proficiency");
    let second_proficiency=localStorage.getItem("second_proficiency");
    let third_proficiency=localStorage.getItem("third_proficiency");
    let fourth_proficiency=localStorage.getItem("fourth_proficiency");



    console.log(firstProficiency);
    home.innerHTML=navItem1;
    contact.innerHTML=navItem2;
    blog.innerHTML=navItem3;
    bannerHeading1.innerHTML=bannerHeading;
    bannerText1.innerHTML=bannerDescription;
    bannerButtonText1.innerHTML=bannerbuttonText;

    firstUniname.innerHTML=firstSchool;
    secondUniname.innerHTML=secondSchool;
    thirdUniname.innerHTML=thirdSchool;

    firstUnidesc.innerHTML=firstDesc;
    secondUnidesc.innerHTML=secondDesc;
    thirdUnidesc.innerHTML=thirdDesc;

    firstSkill.innerHTML=first_skill;
    secondSkill.innerHTML=second_skill;
    thirdSkill.innerHTML=third_skill;
    fourthSkill.innerHTML=fourth_skill;


    firstProficiency.style.width=first_proficiency;
    secondProficiency.style.width=second_proficiency;
    thirdProficiency.style.width=third_proficiency;
    fourthProficiency.style.width=fourth_proficiency;
  

    
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

// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');

// // Show first slide initially
// slides[0].classList.add('active');

// function showSlide(index) {
//     // Remove active class from all slides
//     slides.forEach(slide => {
//         slide.classList.remove('active');
//     });
    
//     // Add active class to current slide
//     slides[index].classList.add('active');
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(currentSlide);
// }

// // Optional: Auto-play functionality
// setInterval(nextSlide, 5000); // Change slide every 5 seconds




let index=0;
const slides=document.querySelectorAll(".slide");

slides[0].classList.add("active");


function initializeSlide(index){
    slides.forEach((item)=>{
        item.classList.remove("active");
    })

    slides[index].classList.add("active");
}

const prevSlide=()=>{
    index=(index -1 + slides.length)%slides.length;
    initializeSlide(index);
}

const nextSlide=()=>{
    index=(index +1)%slides.length;
    initializeSlide(index);
}




