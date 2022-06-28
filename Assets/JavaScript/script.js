timerEl = document.getElementById("timer");
var timeLeft = 75;
var startButtonClick = document.getElementById("startButtonId");
startButtonClick.addEventListener("click", startQuiz);
var randomQuestion;
var currentQuestion;
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var judgmentEl = document.getElementById("judgment");


function countdown() {
    setInterval(function() {
        if (timeLeft > -1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--
        } else {
            document.getElementById("complete").style.opacity = "100%";
            document.getElementById("questionBox").style.visibility = "hidden";
        }
    }, 1000)
}

function startQuiz() {
    countdown();
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
        button.innerText = answer.text;
        button.classList.add("button");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        } 
        button.addEventListener("click", answerChosen);
        answerEl.appendChild(button);
    }) 
}


function answerChosen(e) {
    var chosenButton = e.target;
    if (chosenButton.dataset.correct) {
        judgmentEl.innerText = "Correct!";
    } else {
        judgmentEl.innerText = "Wrong!"
        timeLeft -= 15;
    }
    nextQuestion();
}

var questions =  [
    { 
    question: "Commonly used data types DO NOT include _____",
    answers: [
        {text: "1. strings", correct: false},
        {text: "2. booleans", correct: false},
        {text: "3. alerts", correct: true},
        {text: "4. numbers", correct: false},
        ]
    },
    { 
    question: "The condition in an if/else statement is enclosed with _____",
    answers: [
        {text: "1. quotes", correct: false},
        {text: "2. curly brackets", correct: false},
        {text: "3. parentheses", correct: true},
        {text: "4. square brackets", correct: false},
        ]
    },
    { 
    question: "Arrays in JavaScript can be used to store _____",
    answers: [
        {text: "1. Numbers and strings", correct: false},
        {text: "2. Other arrays", correct: false},
        {text: "3. Booleans", correct: false},
        {text: "4. All of the above", correct: true},
        ]
    },
    { 
    question: "String values must be enclosed within _____ when being assigned to variables",
    answers: [
        {text: "1. Commas", correct: false},
        {text: "2. Curly brackets", correct: false},
        {text: "3. Quotes", correct: true},
        {text: "4. Parentheses", correct: false},
        ]
    },
    { 
    question: "A very useful tool used during development and debugging for printing content to the debugger is _____",
    answers: [
        {text: "1. JavaScript", correct: false},
        {text: "2. Terminal/Bash", correct: false},
        {text: "3. For Loops", correct: false},
        {text: "4. Console.log", correct: true},
        ]
    },
]