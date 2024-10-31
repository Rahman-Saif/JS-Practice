const clickBtns=document.querySelectorAll(".click-button");
const collapseContent=document.getElementsByClassName("collapse-content");

// if clicked,then paragraph tag will be shown!
clickBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        // console.log(e.currentTarget.children);
        // console.log(e.currentTarget)
        e.currentTarget.children[1].classList.toggle("make-hide");
    })
})