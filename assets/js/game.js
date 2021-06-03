  let question1 = {
    question: 'This is my first question',
    answer1: 'This is one answer',
    answer2: 'This is another answer',
    correctAnswer: '1'
  };

  let question2 = {
    question: 'This is my second question',
    answer1: 'This is one answer to the second question',
    answer2: 'This is another answer to the second question',
    correctAnswer: '2'
  };

  let question3 = {
    question: 'This is my second question',
    answer1: 'This is one answer to the second question',
    answer2: 'This is another answer to the second question',
    correctAnswer: '2'
  };

  let question4 = {
    question: 'This is my second question',
    answer1: 'This is one answer to the second question',
    answer2: 'This is another answer to the second question',
    correctAnswer: '2'
  };

  let difficultyNumber = 3;
  let questionNumber = 1;
  let nextBoxId = document.getElementById("next-box");
  let optionsBox1Id = document.getElementById("options-box-1");
  let optionsBox2Id = document.getElementById("options-box-2");
  let questionBoxTextId= document.getElementById("question-box-text");
  let livesRemainingId = document.getElementById("lives-remaining");
  let livesBoxId = document.getElementById("lives-box");

  nextBoxId.addEventListener("click", nextClick);
  optionsBox1Id.addEventListener("click", checkAnswer1);
  optionsBox2Id.addEventListener("click", checkAnswer2);

function nextClick() {
    let nextBoxValue = nextBoxId.innerText
    if (nextBoxValue === "Start Game") {
        startGame()
    } else if (nextBoxValue === "Next Question") {
        nextQuestion()
    } else if (nextBoxValue === "Try Again") {
        tryAgain()
    }
}

function startGame() {
    nextQuestion();
    livesRemainingId.innerText = difficultyNumber;
    
}

function checkAnswer1() {
    let theAnswer = eval(`
    question${questionNumber}['correctAnswer']
    `);
    if (theAnswer=='1') {
        correctAnswerGiven()
    } else {
        incorrectAnswerGiven()
    }
}

function checkAnswer2() {
    let theAnswer = eval(`
    question${questionNumber}['correctAnswer']
    `);
    if (theAnswer=='2') {
        correctAnswerGiven()
    } else {
        incorrectAnswerGiven()
    }
}

function correctAnswerGiven() {
    nextBoxId.innerHTML = "Next Question";
    questionBoxTextId.innerHTML = "Correct!";
    questionNumber++;
    try {
        eval(`
        question${questionNumber}['question']
        `);
    }
    catch {
        questionBoxTextId.innerHTML = "Correct! That's the end of the game - well done for making it this far!";
        nextBoxId.innerHTML = "Try Again";
    }
    optionsBox1Id.classList.add("hide-me");
    optionsBox2Id.classList.add("hide-me");
    nextBoxId.classList.remove("hide-me");
}

function incorrectAnswerGiven() {
    nextBoxId.innerHTML = "Next Question";
    questionBoxTextId.innerHTML = "Oooh not quite. You've lost a life!";
    if (livesRemainingId.innerText == '0') {
        livesRemainingId.innerText = "";
        questionBoxTextId.innerHTML = "Ooh that answer wasn't quite right and you're out of lives! Click Try Again if you'd like to have another go.";
        nextBoxId.innerHTML = "Try Again";
        optionsBox1Id.classList.add("hide-me");
        optionsBox2Id.classList.add("hide-me");
        nextBoxId.classList.remove("hide-me");
    } else {
        livesRemainingId.innerText = document.getElementById("lives-remaining").innerText -1;
        questionNumber++;
        try {
            eval(`
            question${questionNumber}['question']
            `);
        }
        catch {
            questionBoxTextId.innerHTML = "Ooh that answer wasn't quite right! That's the end of the game - well done for making it this far!";
            nextBoxId.innerHTML = "Try Again";
        }
        optionsBox1Id.classList.add("hide-me");
        optionsBox2Id.classList.add("hide-me");
        nextBoxId.classList.remove("hide-me");
    }
    }

    

function nextQuestion() {
    questionBoxTextId.innerHTML = eval(`
    question${questionNumber}['question']
    `);
    optionsBox1Id.innerHTML = eval(`
    question${questionNumber}['answer1']
    `);
    optionsBox2Id.innerHTML = eval(`
    question${questionNumber}['answer2']
    `);
    optionsBox1Id.classList.remove("hide-me");
    optionsBox2Id.classList.remove("hide-me");
    nextBoxId.classList.add("hide-me");
    livesBoxId.classList.remove("hide-me");
}

function tryAgain() {
    difficultyNumber = 3;
    questionNumber = 1;
    startGame();
}