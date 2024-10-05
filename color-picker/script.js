
let red=document.getElementById("red");
let green=document.getElementById("green");
let blue=document.getElementById("blue");
let result=document.getElementById("result");

let decimalradio=document.getElementById("deciradio");
let hexaradio=document.getElementById("hexradio");

function runjs(){
    // e.preventDefault();

    if(decimalradio.checked){
        showdec();
    }else{
        showhex();
    }

    console.log(result)
 
}

function showdec()
{
    let red1=red.value;
    let green1=green.value;
    let blue1=blue.value;

    result.style.background = `rgb(${red1},${green1},${blue1})`;
}

function showhex()
{
    let red1=red.value;
    let green1=green.value;
    let blue1=blue.value;

    

    result.style.background = `hex(${red1},${green1},${blue1})`;
}





