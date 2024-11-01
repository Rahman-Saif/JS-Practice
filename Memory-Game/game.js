document.addEventListener('DOMContentLoaded',()=>{

const grid=document.getElementById("grid");
let cardChoosenId=[];
let cardChoosenName=[];
let cardsWon=[];
const resultDisplay=document.getElementById('result');


const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]


  function checkForMatch(){
    const cards=document.querySelectorAll("img");
    const optionOneId=cardChoosenId[0];
    const optionTwoId=cardChoosenId[1];

    if(optionOneId==optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionOneId].setAttribute('src','images/blank.png');
        alert("you pressed the same card");
    }
    else if(cardChoosenName[0]==cardChoosenName[1]){
        alert('you found a match!');
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cards[optionOneId].removeEventListener('click',flipCardImg);
        cards[optionTwoId].removeEventListener('click',flipCardImg);
        cardsWon.push(cardChoosenName);
    }else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert('sorry,Try again!');
    }

    resultDisplay.textContent=cardsWon.length;
    if(cardsWon.length==cardArray.length/2){
        resultDisplay.textContent='congrats!you found them all!'
    }
  }
  function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const cardImg=document.createElement('img');
        cardImg.setAttribute("data-id",i);
        cardImg.setAttribute("src",'images/blank.png');
        grid.appendChild(cardImg);
        cardImg.addEventListener("click",flipCardImg);
    }
  }


function flipCardImg(){
    let cardId=this.getAttribute('data-id');
    cardChoosenId.push(cardId);
    let cardName=cardArray[cardId].name;
    cardChoosenName.push(cardName);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardChoosenName.length==2){
        setTimeout(checkForMatch,500);
    }
}

  createBoard()

      
})