const questions = [
    {
        question: "Which of the following HTTP status codes represents a 'Permanent Redirect'?",
        answers: [
            { text: "301", correct: true },
            { text: "404", correct: false },
            { text: "500", correct: false },
            { text: "302", correct: false },
        ]
    },
    {
        question: "In CSS, which of the following selectors has the **highest specificity**?",
        answers: [
            { text: "Element Selector (e.g., div)", correct: false },
            { text: "Class Selector (e.g., .container)", correct: false },
            { text: "ID Selector (e.g., #header)", correct: true },
            { text: "Universal Selector ( * )", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'defer' attribute in a `<script>` tag?",
        answers: [
            { text: "It prevents the script from executing", correct: false },
            { text: "It allows the script to run before HTML is parsed", correct: false },
            { text: "It defers script execution until the HTML document is fully parsed", correct: true },
            { text: "It blocks all further script loading", correct: false },
        ]
    },
    {
        question: "Which of the following is **not a valid semantic HTML element**?",
        answers: [
            { text: "section", correct: false },
            { text: "article", correct: false },
            { text: "container", correct: true },
            { text: "aside", correct: false },
        ]
    },
    {
        question: "What will `console.log(typeof null)` output in JavaScript?",
        answers: [
            { text: "null", correct: false },
            { text: "object", correct: true },
            { text: "undefined", correct: false },
            { text: "boolean", correct: false },
        ]
    },
    {
        question: "In Flexbox, which property is used to align items **along the main axis**?",
        answers: [
            { text: "justify-content", correct: true },
            { text: "align-items", correct: false },
            { text: "align-content", correct: false },
            { text: "flex-direction", correct: false },
        ]
    },
    {
        question: "Which attribute is used in HTML5 to make a field mandatory in a form?",
        answers: [
            { text: "required", correct: true },
            { text: "mandatory", correct: false },
            { text: "validate", correct: false },
            { text: "needed", correct: false },
        ]
    },
    {
        question: "Which of the following is the correct way to create a **Promise** in JavaScript?",
        answers: [
            { text: "let p = new Promise((resolve, reject) => {...})", correct: true },
            { text: "let p = Promise.create()", correct: false },
            { text: "let p = Promise(function() {...})", correct: false },
            { text: "let p = new promise()", correct: false },
        ]
    },
    {
        question: "Which CSS property controls **the stacking order** of elements?",
        answers: [
            { text: "float", correct: false },
            { text: "z-index", correct: true },
            { text: "order", correct: false },
            { text: "position", correct: false },
        ]
    },
    {
        question: "In HTML5, which element is used for embedding **audio files**?",
        answers: [
            { text: "mp3", correct: false },
            { text: "media", correct: false },
            { text: "sound", correct: false },
            { text: "audio", correct: true },
        ]
    }
];

const questionElement=document.getElementById("question")
const answerbtn=document.getElementById("answer_buttons")
const next=document.getElementsByClassName("next_btn")[0]
let currentidx=0;
let score=0;
function startquiz(){
    currentidx=0;
    score=0;
    next.innerHTML="Next";
    showques();
}

function showques(){
    resetstate(); 
    let currentques=questions[currentidx];
    let quesno=currentidx+1;
    questionElement.innerHTML=quesno+" . "+currentques.question;
    currentques.answers.forEach(e => {
        const button=document.createElement("button");
        button.innerHTML=e.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(e.correct){
            button.dataset.correct=e.correct;
        }
        button.addEventListener("click",selectans);

    });


}
function resetstate(){
    next.style.display="none"
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
function selectans(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct")
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect")
    }
    Array.from(answerbtn.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
         button.disabled=true;
         next.style.display="block";
    });
}
next.addEventListener("click",()=>{
    if(currentidx<questions.length){
        handlenextbutton();
    }
    else {
        startquiz()
    }
})
function showscore(){
    resetstate();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length} !! `;
    next.innerHTML="Play again";
    next.style.display="block";
}
function handlenextbutton(){
     currentidx++;
     if(currentidx<questions.length){
        showques()
     }
     else {
        showscore();
     }
}
// function nextques(){}
startquiz();