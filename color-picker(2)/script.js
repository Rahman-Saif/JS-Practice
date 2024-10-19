
let decimalradio=document.getElementById("dec");
let HexRadio=document.getElementById("hex");
let redInput=document.getElementById("redInput");
let greenInput=document.getElementById("GreenInput");
let blueInput=document.getElementById("BlueInput");
let redRes=document.getElementById("redResult");
let greenRes=document.getElementById("GreenResult");
let blueRes=document.getElementById("BlueResult");

function calculate(){
    redRes.innerHTML=redInput.value;
    greenRes.innerText=greenInput.value;
    blueRes.innerText=blueInput.value;

    let red1=redInput.value;
    let green1=greenInput.value;
    let blue1=blueInput.value;

    if(decimalradio.checked){
        red1=parseInt(red1);
        green1=parseInt(green1);
        blue1=parseInt(blue1);

    }else{
        red1=parseInt(red1,16);
        green1=parseInt(green1,16);
        blue1=parseInt(blue1,16);
    }

    result.style.background = `rgb(${red1},${green1},${blue1})`

}






