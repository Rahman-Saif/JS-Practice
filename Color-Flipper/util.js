
//generating random hexacolor Code
function randomHexColorCode(){
    let n=(Math.random()*0xfffff*1000000).toString(16);
    return '#'+n.slice(0,6);
}


//if button clicked,then the color changes
function backgroundColorChanger(){
    let colorCode=randomHexColorCode();
    text.innerText=colorCode;
    bgColorText.appendChild(text);

    main.style.backgroundColor=colorCode;
}