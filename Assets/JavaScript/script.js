// sets timer and begins at 75 seconds
timerEl = document.getElementById("timer");
var timeLeft = 75;

// selectors
var startButtonClick = document.querySelector("#startButtonId");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var judgmentEl = document.getElementById("judgment");
var pointsEl = document.getElementById("points")
var highScoresEl = document.getElementById("highScores");
var scoresEl = document.getElementById("scores");
var finalScore = document.getElementById("finalScore");
var submitButtonClick = document.querySelector("#submitButtonId");
var nomen = document.getElementById("initials");

// global variables 
var randomQuestion;
var currentQuestion;
var points = 0;

// attempting to create leaderboard array for local storage
var leaderboardArray = [];
var display = JSON.parse(localStorage.getItem("display")) || [];

// function to initiate game and hide/reveal appropriate elements
startButtonClick.addEventListener("click", function() {
    localStorage.removeItem(points);
    countdown();
    document.getElementById("startButtonId").style.display = "none";
    document.getElementById("CQC").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("questionBox").style.visibility = "visible";
    currentQuestion = 0;
    randomQuestion = questions.sort(() => Math.random() -0.5);
    nextQuestion();
});

// function to track timer and trigger end of game
function countdown() {
    var intervalId = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--
        } else {
            clearInterval(intervalId);
            document.getElementById("complete").style.opacity = "100%";
            document.getElementById("questionBox").style.visibility = "hidden";
            document.getElementById("finalScore").textContent = points;
            document.getElementById("points").textContent = points;
            timeLeft = 0;
        }
        timerEl.textContent = "Time: " + timeLeft;
    }, 1000)
};


// function to select next random question
function nextQuestion() {
    newQuestion(randomQuestion[currentQuestion]);
};

// function to generate next question
function newQuestion(question) {
    randomQuestion = questions.sort(() => Math.random() -0.5);
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
};

// function to check answers
function answerChosen(e) {
    var chosenButton = e.target;
    if (chosenButton.dataset.correct) {
        judgmentEl.innerText = "Correct!";
        points++;
        pointsEl.textContent = points;
    } else {
        judgmentEl.innerText = "Wrong!"
        timeLeft -= 15;
    }
    answerEl.textContent = "";
    nextQuestion();
};

// function to trigger movement to leaderboard and attempt to log scores
submitButtonClick.addEventListener("click", function () {
    event.preventDefault();
    var display = {
        points: points,
        inits: initials
      };    
    display.inits = document.getElementById("initials").value;
    display.numbs = document.getElementById("points").values;
    localStorage.setItem("display", JSON.stringify(display));
    window.location = "leaderboard.html";
  });

// questions
var questions =  [
    { 
    question: "Commonly used data types DO NOT include _____",
    answers: [
        {text: "1. Strings", correct: false},
        {text: "2. Booleans", correct: false},
        {text: "3. Alerts", correct: true},
        {text: "4. Numbers", correct: false},
        ]
    },
    { 
    question: "The condition in an if/else statement is enclosed with _____",
    answers: [
        {text: "1. Quotes", correct: false},
        {text: "2. Curly brackets", correct: false},
        {text: "3. Parentheses", correct: true},
        {text: "4. Square brackets", correct: false},
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
    { 
        question: "Who is, without a doubt, the greatest TA?",
        answers: [
            {text: "1. Donnie Cook", correct: false},
            {text: "2. Travis Cook", correct: false},
            {text: "3. Mary Prince", correct: false},
            {text: "4. All of the above", correct: true},
            ]
        }
];
