
let plus=document.querySelector(".increment");
let minus=document.querySelector(".decrement");
let reset=document.querySelector(".reset");
let result=document.querySelector(".result");

//changing value of count variables with button clicks
plus.addEventListener("click",increaseCount);
minus.addEventListener("click",decreaseCount);
reset.addEventListener("click",resetCount);

