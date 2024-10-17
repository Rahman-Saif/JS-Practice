
let red=document.getElementById("red");
let green=document.getElementById("green");
let blue=document.getElementById("blue");
let result=document.getElementById("result");

let decimalradio=document.getElementById("deciradio");
let hexaradio=document.getElementById("hexradio");

function runjs(){
    let red1;
    let green1;
    let blue1;

    if(decimalradio.checked){
        red1=parseInt(red.value);
        green1=parseInt(green.value);
        blue1=parseInt(blue.value);

    }else{
        red1=parseInt(red.value,16);
        green1=parseInt(green.value,16);
        blue1=parseInt(blue.value,16);
    }

    result.style.background = `rgb(${red1},${green1},${blue1})`

}


































// function runjs(){
//     // e.preventDefault();

//     if(decimalradio.checked){
//         showdec();
//     }else{
//         showhex();
//     }

//     console.log(result)
 
// }

// function showdec()
// {
//     let red1=red.value;
//     let green1=green.value;
//     let blue1=blue.value;

//     result.style.background = `rgb(${red1},${green1},${blue1})`;
// }

// function showhex()
// {
//     let red1=red.value;
//     let green1=green.value;
//     let blue1=blue.value;

    

//     result.style.background = `hex(${red1},${green1},${blue1})`;
// }





