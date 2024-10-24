

let displayTime=document.getElementById("timeDisplay");
const startBtn=document.getElementById("startStopBtn");
const resetBtn=document.getElementById("resetBtn1");

    let hour=0;
    let min=0;
    let sec=0;
    let timing;

const handleDisplayTime=(content)=>{
    console.log(content)

    if(content == 'start'){
        console.log("hello")
    timing= setInterval(showdisplay,10);
    }

    else if(content == 'Stop'){
        
        clearInterval(timing);
    }

}

const showdisplay=()=>{
    displayTime.innerHTML=`${hour}:${min}:${sec}`;
    sec++;
    if(sec>60){
        min++;
        sec=0;
        // clearInterval(timing);

    }
    if(min>60){
        hour++;
        min=0;
    }
}

const resetDisplayTime=()=>{
    let resethour=0;
    let resetmin=0;
    let resetsec=0;
    clearInterval(timing);
    displayTime.innerHTML=`${resethour}:${resetmin}:${resetsec}`;

}



startBtn.addEventListener("click",(e)=>{
    console.log(e.target.innerText)
    if(e.target.innerText == 'Start'){
        e.target.innerText='Stop';
        console.log("noo");
        handleDisplayTime('start');
    }
    else if(e.target.innerText == 'Stop'){
        e.target.innerText='Start';
        handleDisplayTime('Stop');
    }
    // handleDisplayTime()
});
resetBtn.addEventListener("click",resetDisplayTime);