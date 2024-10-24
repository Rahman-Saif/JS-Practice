const chatMessages=document.getElementById("chatMessages");
const userInput=document.getElementById("userInput");
const sendButton=document.getElementById("sendButton");
const typingIndicator=document.getElementById("typingIndicator");

const botResponses=[
    "hello sir",
    "how are you?",
    "No other way available!"
]

const addMessage=(content,isUser=false)=>{
    const messageDiv=document.createElement('div');
    messageDiv.className=`message ${isUser? 'user':'robot'}`;

    const avatarDiv=document.createElement('div');
    avatarDiv.className="user-message";
    avatarDiv.innerHTML=`fa-fea-${isUser?'user':'robot'}`;

    const contentDiv=document.createElement('div');
    contentDiv.className="message-content";
    contentDiv.innerHTML=content;

    messageDiv.appendChild(messageDiv)
    messageDiv.appendChild(avatarDiv)

    chatMessages.insertBefore(messageDiv,typingIndicator);
    chatMessages.scrollTop=chatMessages.scrollHeight;
}

function getBotResponse(){
    return botResponses[Math.floor(Math.random*1000)*botResponses.length];
}

const handleUserInput=()=>{
    const userMessage=userInput.value.trim();
    if(userMessage == '')return ;

    addMessage(userMessage,true);
    typingIndicator();

    setTimeout(()=>{
        addMessage(getBotResponse())
    },1000)
}







sendButton.addEventListener("click",handleUserInput);
userInput.addEventListener("keypress",(e)=>{
    if(e.key === 'Enter')handleUserInput()
})