let fname=document.getElementById("fname-input");
let lname=document.getElementById("lname-input");
let male=document.getElementById("male");
let female=document.getElementById("female");
let trans=document.getElementById("N/A");
let zip=document.getElementById("zip-input");
let state=document.getElementById("state");
let address=document.getElementById("address-input");
let email=document.getElementById("email-input");
let telephone=document.getElementById("telephone-input");
let accept=document.getElementById("accept");
let inform=document.getElementById("inform");
let password=document.getElementById("password");
let cpassword=document.getElementById("confirm-password");
let submitbtn=document.getElementById("submit");
let gender=document.getElementsByClassName("gender");
let statei=document.getElementsByClassName("state");
let checks=document.getElementsByClassName("checks");

let fnameErr=document.getElementById("fname-error");
let lnameErr=document.getElementById("lname-error");
let genderErr=document.getElementById("gender-error");
let zipErr=document.getElementById("zip-error");
let stateErr=document.getElementById("state-error");
let addressErr=document.getElementById("address-error");
let emailErr=document.getElementById("email-error");
let telephoneErr=document.getElementById("telephone-error");
let acceptErr=document.getElementById("acceptError");
let informErr=document.getElementById("inform-Error");
let commentErr=document.getElementById("comment-error");
let passwordErr=document.getElementById("password-error");
let confirmPassErr=document.getElementById("cpass-Error");

let spanErr=document.getElementById("error");

function validate(){
    let result=true;

    for(let i=0;i<spanErr.length;i++){
        spanErr.innerHTML="";
    }

    if(fname.value==""){
        fnameErr.innerHTML="Name should be given";
        result=false;
    }

    if(lname.value==""){
        lnameErr.innerHTML="Name should be given";
        result=false;
    }

    let found=false;

    for(let i=0;i<gender.length;i++){
        if(gender[i].checked == true){
            found=true;
            break;
        }
    }

    if(!found){
        genderErr.innerHTML="Gender should be specified";
    }

    if(zip.value == "" && zip.value <5){
        zipErr.innerHTML="Place the right zip code!";
    }

    let find=false;

    for(let i=0;i<statei.length;i++){
        if(state[i].checked == true){
            find=true;
            break;
        }
    }

    if(!find){
        stateErr.innerHTML="Give the full state name";
    }

    if(address.input == ""){
        addressErr.innerHTML="Address should be specified";
    }
    if(email.input == ""){
        email.innerHTML="Email should be specified";
    }
    if(telephone.input == ""){
        telephoneErr.innerHTML="Telephone Number should be specified";
    }

    let ab=false;

    for(let i=0;i<checks.length;i++){
        if(checks[i].checked == true){
            ab=true;
        }
    }

    if(!ab){
        acceptErr.innerHTML="Checks the right";
    }

    if(password.value.length <6){
        passwordErr.innerHTML="Password should be more than 6 characters";
    }

    if(cpassword.value != password.value){
        confirmPassErr.innerHTML="Password din;t match!"
    }

}


























submitbtn.addEventListener("submit",validate);