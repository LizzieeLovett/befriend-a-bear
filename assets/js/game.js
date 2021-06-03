  let question1 = {
    question: "Whilst walking through the woods, you spot a bear behind some bushes. How do you get the bear's attention?",
    answer1: "Wolf whistle",
    answer2: "Throw a rock towards it",
    correctAnswer: '2',
    correctResponse: "Correct! The bear is startled but it is definitely paying attention to you",
    incorrectResponse: "Ooh you've lost a life... the bear is a bear and not a wolf and therefore hears nothing but sniffs you out anyway and is suspicious"
  };

  let question2 = {
    question: "Now you have the bear's attention, how do you break the ice?",
    answer1: "Offer a piece of lemon drizzle cake",
    answer2: "Offer a chocolate brownie",
    correctAnswer: '1',
    correctResponse: "Correct! The bear loves the fruity citrus flavour",
    incorrectResponse: "Ooh you've lost a life... chocolate is poisonous to bears and now it has a tummy ache and its all your fault :("
  };

  let question3 = {
    question: "Friends like to do activities together. What do you suggest doing with the bear?",
    answer1: "Raid a local campsite",
    answer2: "Rub against some trees",
    correctAnswer: '1',
    correctResponse: "Correct! You find some tasty treats and the bear laughs when people run away screaming - it thinks you're funny",
    incorrectResponse: "Ooh you've lost a life... the bear loves this activity, but thinks YOU doing it is a dominance threat. It is watching you closely"
  };

  let question4 = {
    question: "Whilst walking together, the bear accidentally stands on your toe. How do you react?",
    answer1: "Smile through the pain",
    answer2: "Tell the bear to GET OFF",
    correctAnswer: '2',
    correctResponse: "Correct! The bear appreciates your direct approach and vows to be a more considerate walking partner in future",
    incorrectResponse: "Ooh you've lost a life... the bear notices it's mistake and is offended that you didn't feel you could be frank about it >:("
  }; 

  let question5 = {
    question: "You come across a river. How should the two of you cross?",
    answer1: "Ride the bear like a horse",
    answer2: "Use what works best for each of you separately",
    correctAnswer: '1',
    correctResponse: "Correct! Team work makes the dream work. The bear has a growing confidence in this friendship",
    incorrectResponse: "Ooh you've lost a life... two heads are better than one! Team work could have really brought you closer together"
    }; 

/*  
    let questionN = {
    question: "",
    answer1: "",
    answer2: "",
    correctAnswer: '2',
    correctResponse: "Correct! ",
    incorrectResponse: "Ooh you've lost a life... "
  }; 
*/

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
    questionBoxTextId.innerHTML = eval(`
    question${questionNumber}['correctResponse']
    `);
    questionNumber++;
    try {
        eval(`
        question${questionNumber}['question']
        `);
    }
    catch {
        questionBoxTextId.innerHTML += ". That's the end of the game - you and the bear will be pals forever! Try again and see if you can increase your friend score.";
        nextBoxId.innerHTML = "Try Again";
    }
    optionsBox1Id.classList.add("hide-me");
    optionsBox2Id.classList.add("hide-me");
    nextBoxId.classList.remove("hide-me");
}

function incorrectAnswerGiven() {
    nextBoxId.innerHTML = "Next Question";
    questionBoxTextId.innerHTML = eval(`
    question${questionNumber}['incorrectResponse']
    `);
    if (livesRemainingId.innerText == '0') {
        livesRemainingId.innerText = "";
        questionBoxTextId.innerHTML += ". Ooh the bear is LIVID and you're out of lives! Click Try Again if you'd like to have another go at making friends.";
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
            questionBoxTextId.innerHTML += ". That's the end of the game - you and the bear will be pals forever! Try again and see if you can increase your friend score.";
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