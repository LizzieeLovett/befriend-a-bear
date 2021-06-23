// game.js variables
  let difficultyNumber = 3;
  let questionNumber = 1;
  let nextBoxId = document.getElementById("next-box");
  let optionsBox1Id = document.getElementById("options-box-1");
  let optionsBox2Id = document.getElementById("options-box-2");
  let questionBoxTextId = document.getElementById("question-box-text");
  let livesRemainingId = document.getElementById("lives-remaining");
  let scoreTotalId = document.getElementById("score-total");
  let correctFeedbackId = document.getElementById("correct-answer-feedback");
  let wrongFeedbackId = document.getElementById("wrong-answer-feedback");
  let containerEndId = document.getElementById("end-container");
  let modalEndTextId = document.getElementById("end-modal-text");
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
  let question6 = {
    question: "As you're crossing the river, you grab some salmon. How do you prepare the fish for lunch?",
    answer1: "Salmon en croute",
    answer2: "Salmon kedgeree",
    correctAnswer: '1',
    correctResponse: "Correct! Even the bear knows that kedgeree is a breakfast dish",
    incorrectResponse: "Ooh you've lost a life... even the bear knows that kedgeree is a breakfast dish. It questions your taste level"
  };
  let question7 = {
    question: "Where do the two of you go to eat the dish you prepared?",
    answer1: "A romantic spot in the trees",
    answer2: "In the gravel next to the river",
    correctAnswer: '2',
    correctResponse: "Correct! The bear is starving and can't wait to tuck in",
    incorrectResponse: "Ooh you've lost a life... the bear thinks your actions have overstepped the friendship mark and is a little uncomfortable"
  };

// game.js event listeners
  nextBoxId.addEventListener("click", nextClick);
  optionsBox1Id.addEventListener("click", checkAnswer1);
  optionsBox2Id.addEventListener("click", checkAnswer2);
  document.getElementById("open-how-to-play").addEventListener("click", toggleHideHTP);
  document.getElementById("close-how-to-play").addEventListener("click", toggleHideHTP);
  document.getElementById("close-end").addEventListener("click", toggleHideEnd);
 
// game.js functions
  // nextClick deals with the state of the button with an id of next-box depending on the text inside the button.
  function nextClick() {
    let nextBoxValue = nextBoxId.innerText;
    if (nextBoxValue === "Start Game") {
      startGame();
    } else if (nextBoxValue === "Next Question") {
      nextQuestion();
    } else if (nextBoxValue === "Try Again") {
      tryAgain();
    }
  }
  
  // startGame prepares the elements that need to be visible for the game to begin.
  function startGame() {
    document.getElementById("images-box-1").classList.add("hide-me-small");
    document.getElementById("question-box").classList.add("border-radius-small");
    nextQuestion();
    livesRemainingId.innerText = difficultyNumber;
  }
  
  // checkAnswer1 compares option box 1 with the correct answer stored in the question array.
  function checkAnswer1() {
    let theAnswer = eval(`
      question${questionNumber}['correctAnswer']
      `);
    if (theAnswer == '1') {
      correctAnswerGiven();
    } else {
      incorrectAnswerGiven();
    }
  }
  
  // checkAnswer2 compares option box 2 with the correct answer stored in the question array.
  function checkAnswer2() {
    let theAnswer = eval(`
      question${questionNumber}['correctAnswer']
      `);
    if (theAnswer == '2') {
      correctAnswerGiven();
    } else {
      incorrectAnswerGiven();
    }
  }
  
  // correctAnswerGiven shows a response to the user for their correct answer and either sets up the next question or ends the game.
  function correctAnswerGiven() {
    nextBoxId.innerHTML = "Next Question";
    questionBoxTextId.innerHTML = eval(`
      question${questionNumber}['correctResponse']
      `);
    questionNumber++;
    /* This try and catch section evaluates whether there are any more questions available. If there are no more, the game ends
    and displays your score. If you scored full marks you get a different message in the end game modal. */
    try {
      eval(`
          question${questionNumber}['question']
          `);
    } catch {
      questionBoxTextId.innerHTML += ". That's the end of the game - you and the bear will be pals forever! Try again and see if you can increase your friend score.";
      nextBoxId.innerHTML = "Try Again";
      let tempScore = parseInt(scoreTotalId.innerText) + 1;
      if ((parseInt(scoreTotalId.innerText) + 2) == (parseInt(questionNumber))) {
        modalEndTextId.innerHTML = "Your score was " + tempScore + ". Wow top score! Once we've updated the game come back again to try and beat it!";
      } else {
        modalEndTextId.innerHTML = "Your score was " + tempScore + ". Try to beat it next time!";
      }
      containerEndId.classList.toggle("hide-me");
    }
    optionsBox1Id.classList.add("hide-me");
    optionsBox2Id.classList.add("hide-me");
    nextBoxId.classList.remove("hide-me");
    scoreTotalId.innerText++;
    correctAnswerFeedback();
  }
  
  // incorrectAnswerGiven shows a response to the user for their incorrect answer and either sets up the next question or ends the game.
  function incorrectAnswerGiven() {
    nextBoxId.innerHTML = "Next Question";
    questionBoxTextId.innerHTML = eval(`
      question${questionNumber}['incorrectResponse']
      `);
    // If the user has no more lives remaining, the game is ended regardless of the number of questions remaining.
    if (livesRemainingId.innerText == '0') {
      livesRemainingId.innerText = "";
      questionBoxTextId.innerHTML += ". The bear is LIVID and you're out of lives! Click Try Again if you'd like to have another go at making friends.";
      nextBoxId.innerHTML = "Try Again";
      optionsBox1Id.classList.add("hide-me");
      optionsBox2Id.classList.add("hide-me");
      nextBoxId.classList.remove("hide-me");
      scoreTotalId.innerText--;
      wrongAnswerFeedback();
      modalEndTextId.innerHTML = "Your score was " + scoreTotalId.innerText + ". Try to beat it next time!";
      containerEndId.classList.toggle("hide-me");
    } else {
      livesRemainingId.innerText--;
      questionNumber++;
      /* This try and catch section evaluates whether there are any more questions available. If there are no more, the game ends
      and displays your score. */
      try {
        eval(`
              question${questionNumber}['question']
              `);
      } catch {
        questionBoxTextId.innerHTML += ". That's the end of the game - you and the bear will be pals forever! Try again and see if you can increase your friend score.";
        nextBoxId.innerHTML = "Try Again";
        let tempScore = parseInt(scoreTotalId.innerText) - 1;
        modalEndTextId.innerHTML = "Your score was " + tempScore + ". Try to beat it next time!";
        containerEndId.classList.toggle("hide-me");
      }
      optionsBox1Id.classList.add("hide-me");
      optionsBox2Id.classList.add("hide-me");
      nextBoxId.classList.remove("hide-me");
      scoreTotalId.innerText--;
      wrongAnswerFeedback();
    }
  }
  
  // nextQuestion prepares the next question and possible answers on the user's screen and hides anything unneccessary.
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
    document.getElementById("lives-box").classList.remove("hide-me");
    document.getElementById("score-box").classList.remove("hide-me");
  }
  
  // tryAgain resets the game should the user wish to play again.
  function tryAgain() {
    difficultyNumber = 3;
    questionNumber = 1;
    scoreTotalId.innerHTML = 0;
    startGame();
  }
  
  // toggleHTP toggles the visibility of the how to play modal after clicking the how to play button.
  function toggleHideHTP() {
    document.getElementById("how-to-play-container").classList.toggle("hide-me");
  }
  
  // toggleHTP toggles the visibility of the end game modal after completing or failing the game.
  function toggleHideEnd() {
    containerEndId.classList.toggle("hide-me");
  }
  
  /* wrongAnswerFeedback changes the font color of the lives remaining and score total displays as well as showing the 
  wrong-answer-feedback id in a different color. */
  function wrongAnswerFeedback() {
    scoreTotalId.classList.add("wrong-answer");
    setTimeout(function() {
      scoreTotalId.classList.remove("wrong-answer");
    }, 750);
    livesRemainingId.classList.add("wrong-answer");
    setTimeout(function() {
      livesRemainingId.classList.remove("wrong-answer");
    }, 750);
    wrongFeedbackId.classList.add("wrong-answer");
    setTimeout(function() {
      wrongFeedbackId.classList.remove("wrong-answer");
    }, 750);
  }
  
   /* correctAnswerFeedback changes the font color of the score total display as well as showing the 
  correct-answer-feedback id in a different color. */
  function correctAnswerFeedback() {
    scoreTotalId.classList.add("correct-answer");
    setTimeout(function() {
      scoreTotalId.classList.remove("correct-answer");
    }, 750);
    correctFeedbackId.classList.add("correct-answer");
    setTimeout(function() {
      correctFeedbackId.classList.remove("correct-answer");
    }, 750);
  }