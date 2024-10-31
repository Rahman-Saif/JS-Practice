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
const answers=document.querySelectorAll(".answer");
const submitBtn=document.getElementById("submit");
const showScore=document.getElementById("showScore");

const ans1=document.getElementById("ans1");
const ans2=document.getElementById("ans2");
const ans3=document.getElementById("ans3");
const ans4=document.getElementById("ans4");

const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");

let quesCount=0;
let score = 0;

const loadQuestion=()=>{
    const quesList=quizDB[quesCount];


question.textContent=quesList.question;
option1.textContent=quesList.a;
option2.textContent=quesList.b;
option3.textContent=quesList.c;
option4.textContent=quesList.d;

}
loadQuestion();

const deselectAll=()=>{
    answers.forEach((ans)=>{
        ans.checked=false;
    })
}

submitBtn.addEventListener("click",(e)=>{
        const quesList=quizDB[quesCount];

    // e.preventDefault();
    
    answers.forEach((ansElem)=>{
        
        if(ansElem.checked){
            let gotAns=ansElem.id;
            if(gotAns == quesList.ans){
                score++;
            }
            
        }

        
    })
    quesCount++;

        if(quesCount<quizDB.length){
            deselectAll();
            loadQuestion()
        }else{
            showScore.innerHTML=`
        <h3> You score ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `;
        }
        
})





















