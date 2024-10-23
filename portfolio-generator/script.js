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

    let firstSchool=document.getElementById("1schoolName").value;
    let secondSchool=document.getElementById("2schoolName").value;
    let thirdSchool=document.getElementById("3schoolName").value;

    let firstDesc=document.getElementById("1description");
    let secondDesc=document.getElementById("2description");
    let thirdDesc=document.getElementById("3description");

    e.preventDefault();
    console.log(navItem1);

    localStorage.setItem("navItem1",navItem1);
    localStorage.setItem("navItem2",navItem2);
    localStorage.setItem("navItem3",navItem3);
    localStorage.setItem("bannerHeading",bannerHeading);
    localStorage.setItem("bannerDescription",bannerDescription);
    localStorage.setItem("bannerbuttonText",bannerbuttonText);

    localStorage.setItem("firstSchool",firstSchool);
    localStorage.setItem("secondSchool",secondSchool);
    localStorage.setItem("thirdDesc",thirdDesc);
    localStorage.setItem("firstDesc",firstDesc);
    localStorage.setItem("secondDesc",secondDesc);
    localStorage.setItem("thirdDesc",thirdDesc);

    // console.log(localStorage.getItem("navItem1"));
    window.location.href="index.html";
 
}













EditSubmitBtn.addEventListener("click",workOn);