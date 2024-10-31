let count=0;

function decreaseCount(){
    count=(count==0)?0:count-1;
    result.innerText=count;
}

function resetCount(){
    count=0;
    result.innerText=count;
}

function increaseCount(){
    count++;
    result.innerText=count;
}
