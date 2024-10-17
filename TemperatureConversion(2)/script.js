let result=document.getElementById("result");

function showcel(){
    let cel=document.getElementById("cel").value;
    cel=parseFloat(cel);

    if(isNaN(cel)){
        alert("Please enter a valid number");
    }else{
        result.innerText=((cel - 32)*5/9).toFixed(2);
    }
}

function showfar(){
    let cel=document.getElementById("far").value;
    cel=parseFloat(cel);

    if(isNaN(cel)){
        alert("Please enter a valid number!");
    }else{
        result.innerText=((cel*9/5)+32).toFixed(2);
    }
}



































