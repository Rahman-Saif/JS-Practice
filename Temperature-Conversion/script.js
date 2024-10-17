let result=document.getElementById("result");
// let inputCelciusValue=celInput.value;
// let inputFarhValue=(FarhInput.value);
    // console.log(inputCelciusValue)


 function  handleSubmit(prop,event){
    event.preventDefault();
    
    if(prop == 'cel'){
        let celInput=document.getElementById('cel-input').value;
        celInput=parseFloat(celInput);
        
        if(isNaN(celInput)){
            alert("please enter a valid number");
        }else{

        
        result.innerHTML=(celInput *9/5)+32;
        }

    }else{
        let FarhInput=document.getElementById('far-input').value;
        FarhInput=parseFloat(FarhInput);

        if(isNaN(FarhInput)){
            alert("Please enter a valid number!");
        }else{

        
        result.innerHTML=(FarhInput -32)*5/9;
        }
    }
  
}

