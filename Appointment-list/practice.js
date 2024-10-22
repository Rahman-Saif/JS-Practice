// part 1 : Catching the  html elements


const displayedDateEl = document.getElementById("displayedDate");
const previousDateEl = document.getElementById("previousDate");
const nextDateEl = document.getElementById("nextDate");
const gotoDateEl = document.getElementById("gotoDate");
const appointmentFormEl = document.getElementById("appointmentForm");
const appointmentsListEl = document.getElementById("appointments");
const appointmentDescEl = document.getElementById("appointmentDesc");
const appointmentDateEl = document.getElementById("appointmentDate");
const appointmentTimeEl = document.getElementById("appointmentTime");
const saveEl = document.getElementById("save");
const deleteEl = document.getElementById("delete");

let selectedDesc,selectedDate,selectedTime;

let appointments=new Map();

let displayDateAndTime=new Date();
let displayDate=getDateOnly(displayDateAndTime);
displayedDateEl.innerHTML=displayDateAndTime.toString();

createAppointmentList();

selectedDate=displayDate;
selectedTime=8;

const createAppointmentList=()=>{
    for(let i=0;i<24;i++){
        const item=document.createElement("li");
        const textNode=document.createTextNode(i);
        item.appendChild(textNode);
        item.setAttribute("class","list-group-item");
        item.setAttribute("id","hour_"+i);
        item.addEventListener("click",handleClickOnHour);
        appointmentsListEl.appendChild(item);

        const option=document.createElement("option");
        const optionText=document.createTextNode(i);
        option.appendChild(optionText);
        option.setAttribute("value",i);
        appointmentTimeEl.appendChild(option);
    }
}


const handleClickOnHour=(e)=>{
    selectedTime=e.target.id.substring(5);

    let temp=appointments.get(displayDate.toDateString());
    if(temp!= undefined){
        if(temp[selectedTime] !=undefined){
            appointmentDescEl.value=temp[selectedTime];
            selectedDesc=temp[selectedTime];
        }else{
            appointmentDescEl.value="";
        }
    }else{
        appointmentDescEl.value="";
    }

    appointmentDateEl.value=getDateOnlyString(displayDate);
    appointmentTimeEl.value=selectedTime;
}

const clearAppointmentsList=()=>{
    for(let i=0;i<24;i++){
        document.getElementById("hour_"+i).innerHTML="i";
    }
}

const updateUI=()=>{
    displayedDateEl.innerHTML=displayDate().toDateString();
    clearAppointmentsList();

    let appointmentsInDay=appointments.get(displayDate.toDateString());
    if(appointmentsInDay != undefined){
        appointmentsInDay.forEach((key,value)=>{
            if(value != undefined){
                document.getElementById("hour_"+key).innerHTML=key +" "+value;
            }
        })
    }
}

const updateAppointment=(appDesc,appDate,appTime)=>{
    if(appointments.get(appDate.toDateString())== undefined){
        appointments.set(appDate.toDateString(),new Array());
        appointments.get(appDate.toDateString())[appTime]=appDesc;
    }else{
        if(appointments.get(appDate.toDateString())[appTime]==undefined){
            
        }
    }
}


const areDatesEqual=(date1,date2)=>{
    if(date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth()
    && date1.getDate() == date2.getDate()
    ) return true;
    else return false;
}

const getDateOnlyString=(date)=>{
    return new Date(date.getFullYear()
    + "-" + ("0" + (date.getMonth() + 1)).slice(-2)
    + "-" + ("0" + date.getDate()).slice(-2));
}

const getDateOnly=(date)=>{
    return new Date(date.getFullYear()
    + "-" + ("0" + (date.getMonth() + 1)).slice(-2)
    + "-" + ("0" + date.getDate()).slice(-2));
}



























