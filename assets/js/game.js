let questionOne = {
    question: 'This is my first question',
    answerOne: 'This is one answer',
    answerTwo: 'This is another answer',
  };

document.getElementById("next-box").addEventListener("click", nextClick);

function nextClick() {
    let nextBoxValue = document.getElementById("next-box").innerText
    if (nextBoxValue === "Start Game") {
        startGame()
    } else if (nextBoxValue === "Next Question") {
        nextQuestion()
    } else if (nextBoxValue === "Try Again") {
        tryAgain()
    }
}

function startGame() {
    console.log(questionOne['question']);
    document.getElementById("question-box-text").innerHTML = questionOne['question'];
    document.getElementById("options-box-1").innerHTML = questionOne['answerOne'];
    document.getElementById("options-box-2").innerHTML = questionOne['answerTwo'];
    document.getElementById("options-box-1").classList.remove("hide-me");
    document.getElementById("options-box-2").classList.remove("hide-me");
    document.getElementById("next-box").classList.add("hide-me");
}

function nextQuestion() {

}

function tryAgain() {

}