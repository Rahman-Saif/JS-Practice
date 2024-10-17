let time=document.getElementById("time");
let dateInput=document.getElementById("alarmDate");
let timeInput=document.getElementById("alarmTime");
let btn=document.getElementById("setAlarm");
let container=document.getElementById("alarms");
let interval;
let maxValue=3;
let cnt=0;
let alsTimesArray=[];



function TimeChange(){
    
    let date=new Date();
    let hours=date.getHours();
    let mins=date.getMinutes();
    let seconds=date.getSeconds();
    let period="AM";

    if(hours >12){
        period="PM";
        if(hours>12){
        hours=hours-12;
    }
}

 time.textContent=`${hours}:${mins}:${seconds}`;

}

function alarmSetFunction(){
    let now=new Date();
    let selectedDate=new Date(dateInput.value + "T" +timeInput.value);
    if(selectedDate <= now){
        alert('Give a good Date brother!');
        return;
    }
    if(alsTimesArray.includes(selectedDate.toString())){
        alert('You can not add more than two alarms!');
        return;
    }

    if(cnt < maxValue){
        let TimeUntilAlarm=selectedDate - now;
        let alarmDiv=document.createElement('div');
        alarmDiv.classList.add("alarm");
        alarmDiv.innerHTML=`
            <span>
                ${selectedDate.toLocaleString()}
            </span>
            <button class="delete-alarm">Delete</button>
        `;

        alarmDiv.querySelector(".delete-alarm")
        .addEventListener("click",()=>{
            alarmDiv.remove();
            cnt--;
            clearTimeout(interval);
        })

        interval=setTimeout(()=>{
            alert('Time to wake up!');
            alarmDiv.remove();
            cnt--;
        },TimeUntilAlarm)
        container.appendChild(alarmDiv);
        cnt++;
        alsTimesArray.push(selectedDate.toString())
    }else{
        alert("You can only add maximum 3 alarms!");
    }
}



setInterval(TimeChange,1000);
btn.addEventListener("click",alarmSetFunction);
TimeChange();






















