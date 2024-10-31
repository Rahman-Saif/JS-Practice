const quizDB = [
  {
    question: "Q1: What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Colorful Style Sheets",
    c: "Computer Style Sheets",
    d: "Creative Style Sheets",
    ans: "ans1",
  },
  {
    question: "Q2: What is the purpose of JavaScript in web development?",
    a: "To structure the web page",
    b: "To style the web page",
    c: "To add interactivity to the web page",
    d: "To manage web server databases",
    ans: "ans3",
  },
  {
    question: "Q3: Which HTML tag is used to define an internal style sheet?",
    a: "<style>",
    b: "<script>",
    c: "<css>",
    d: "<link>",
    ans: "ans1",
  },
  {
    question: "Q4: Which company developed the Java programming language?",
    a: "Microsoft",
    b: "Sun Microsystems",
    c: "Apple",
    d: "Google",
    ans: "ans2",
  }
];

const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showScore")

let quesCount=0;
let score=0;

const loadQuestion=()=>{
    
    const questionList=quizDB[quesCount];
    question.innerText=questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}

loadQuestion();

const getCheckAnswer=()=>{
    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
        
    }) 
    return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElem)=>{
        curAnsElem.checked=false;
    })
}

submit.addEventListener("click",()=>{

    const checkedAnswer=getCheckAnswer();
    

    if(checkedAnswer===quizDB[quesCount].ans){
        score++;
    }
    quesCount++;

    deselectAll();
    if(quesCount<quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`
        <h3> You score ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `;

        
    }
})






