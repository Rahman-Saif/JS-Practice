// edit.html 



let EditSubmitBtn=document.getElementById("submitBtn");







let workOn=(e)=>{
    let navItem1=document.getElementById("item1").value;
    let navItem2=document.getElementById("item2").value;
    let navItem3=document.getElementById("item3").value;

    let bannerHeading=document.getElementById("bannerHeading").value;
    let bannerDescription=document.getElementById("bannerDescription").value;
    let bannerbuttonText=document.getElementById("bannerbuttonText").value;
    let bannerImage=document.getElementById("bannerImage");

    e.preventDefault();
    console.log(navItem1);

    localStorage.setItem("navItem1",navItem1);
    localStorage.setItem("navItem2",navItem2);
    localStorage.setItem("navItem3",navItem3);
    localStorage.setItem("bannerHeading",bannerHeading);
    localStorage.setItem("bannerDescription",bannerDescription);
    localStorage.setItem("bannerbuttonText",bannerbuttonText);

    // console.log(localStorage.getItem("navItem1"));
    window.location.href="index.html";
 
}













EditSubmitBtn.addEventListener("click",workOn);