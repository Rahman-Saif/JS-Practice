console.log("welcome to Digital Stop Watch ");

let hour=prompt("enter Hour:");
let min = prompt("enter Min:");
let sec= prompt("enter Second:");
console.clear();
let h = 0,m=0,s=0;
let i=0;

if(hour!=h || min!=m || sec!=s){
    inervalid=setInterval(permin,1000);
    
    function permin(){
    console.log(`${h} :: ${m} :: ${s}`);
    if(h>=hour && m>=min && s>sec){
        clearInterval(inervalid);
        return ;
    }
    s++;
    if(s>=60){
        m++;
        s=0;
    }
    if(m>=60){
        h++;
        m=0;
    }
    
}


}



