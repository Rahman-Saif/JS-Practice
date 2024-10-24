

const dropdownBtn=document.getElementById("dropbtn1");
const dropdownContent=document.getElementById("dropdown-content1");
    dropdownContent.style.display="none";


dropdownBtn.addEventListener("click",()=>{
  dropdownContent.style.display=  dropdownContent.style.display=== "block" ? "none" :"block";
})

const imageDropDown=document.getElementById("dropimage");
const imageDropContents=document.getElementById("imageContents");

imageDropDown.addEventListener("click",()=>{
  imageDropContents.style.display=imageDropContents.style.display==="block"? "none":"block";
})