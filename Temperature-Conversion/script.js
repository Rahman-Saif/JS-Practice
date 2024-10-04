let result=document.getElementById("result");
// let inputCelciusValue=celInput.value;
// let inputFarhValue=(FarhInput.value);
    // console.log(inputCelciusValue)


 function  handleSubmit(prop,event){
    event.preventDefault();
    
    if(prop == 'cel'){
        let celInput=document.getElementById('cel-input').value;
        celInput=Number(celInput)  
        result.innerHTML=celInput*5;

    }else{
        let FarhInput=document.getElementById('far-input').value;
        FarhInput=Number(FarhInput);
        result.innerHTML=FarhInput*5;
    }
  
}

