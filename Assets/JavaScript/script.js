var startButtonClick = document.getElementById("startButtonId");
startButtonClick.addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("startButtonId").style.display = "none";
    document.getElementById("CQC").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("questionBox").style.visibility = "visible";
}

function answerChosen() {

}