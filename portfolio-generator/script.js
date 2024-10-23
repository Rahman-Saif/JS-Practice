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

    let firstDesc=document.getElementById("1description").value;
    let secondDesc=document.getElementById("2description").value;
    let thirdDesc=document.getElementById("3description").value;

    let first_skill=document.getElementById("skill1").value;
    let second_skill=document.getElementById("skill2").value;
    let third_skill=document.getElementById("skill3").value;
    let fourth_skill=document.getElementById("skill4").value;

    let first_proficiency=document.getElementById("proficiency1").value;
    let second_proficiency=document.getElementById("proficiency2").value;
    let third_proficiency=document.getElementById("proficiency3").value;
    let fourth_proficiency=document.getElementById("proficiency4").value;

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

    localStorage.setItem("first_skill",first_skill);
    localStorage.setItem("second_skill",second_skill);
    localStorage.setItem("third_skill",third_skill);
    localStorage.setItem("fourth_skill",fourth_skill);

    localStorage.setItem("first_proficiency",first_proficiency);
    localStorage.setItem("second_proficiency",second_proficiency);
    localStorage.setItem("third_proficiency",third_proficiency);
    localStorage.setItem("fourth_proficiency",fourth_proficiency);

    
    // console.log(localStorage.getItem("navItem1"));
    window.location.href="index.html";
 
}













EditSubmitBtn.addEventListener("click",workOn);