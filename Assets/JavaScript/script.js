var startButtonClick = document.getElementById("startButtonId");
startButtonClick.addEventListener("click", startQuiz);
var randomQuestion;
var currentQuestion;
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var judgmentEl = document.getElementById("judgment");


function startQuiz() {
    document.getElementById("startButtonId").style.display = "none";
    document.getElementById("CQC").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("questionBox").style.visibility = "visible";
    currentQuestion = 0;
    randomQuestion = questions.sort(() => Math.random() -0.5);
    nextQuestion();
}

function nextQuestion() {
    newQuestion(randomQuestion[currentQuestion]);
}

function newQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answers.text;
        button.classList.add("button");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        } 
        button.addEventListener("click", answerChosen);
        answerEl.appendChild(button);
    }) 
}

function answerChosen(e) {

}

var questions =  [
    { 
    question: "Commonly used data types DO NOT include:",
    answers: [
        {text: "1. strings", correct: false},
        {text: "2. booleans", correct: false},
        {text: "3. alerts", correct: true},
        {text: "4. numbers", correct: false},
        ]
    }
]