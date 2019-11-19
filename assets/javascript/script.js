const femaleSuperHeroes = [
  {
    question: "Who is Kamala Khan?",
    choices: ["Ms. Marvel", "Spider-Woman", "The Mighty Thor", "Ironheart"],
    answer: "Ms. Marvel"
  }, {
    question: "Who is Doreen Green?",
    choices: ["Squirrel Girl", "Ms. Marvel", "Spider-Woman", "The Mighty Thor"],
    answer: "Squirrel Girl"
  }, {
    question: "Who is Gwen Poole?",
    choices: ["Gwenpool", "Squirrel Girl", "Ms. Marvel", "Spider-Woman"],
    answer: "Gwenpool"
  }, {
    question: "Who is Nadia Van Dyne?",
    choices: ["Wasp", "Gwenpool", "Squirrel Girl", "Ms. Marvel"],
    answer: "Wasp"
  }, {
    question: "Who is Jennifer Walters?",
    choices: ["She-Hulk", "Wasp", "Gwenpool", "Squirrel Girl"],
    answer: "She-Hulk"
  }, {
    question: "Who is Kate Bishop?",
    choices: ["Hawkeye", "She-Hulk", "Wasp", "Gwenpool"],
    answer: "Hawkeye"
  }, {
    question: "Who is Patsy Walker?",
    choices: ["Hellcat", "Hawkeye", "She-Hulk", "Wasp"],
    answer: "Hellcat"
  }, {
    question: "Who is Riri Williams?",
    choices: ["Ironheart", "Hellcat", "Hawkeye", "She-Hulk"],
    answer: "Ironheart"
  }, {
    question: "Who is Jane Foster?",
    choices: ["The Mighty Thor", "Ironheart", "Hellcat", "Hawkeye"],
    answer: "The Mighty Thor"
  }, {
    question: "Who is Jessica Drew?",
    choices: ["Spider-Woman", "The Mighty Thor", "Ironheart", "Hellcat"],
    answer: "Spider-Woman"
  }
];
const maleSuperHeroes = [
  {
    question: "Who is Peter Parker?",
    choices: ["Spider-Man", "Thor", "Hawkeye", "Gambit"],
    answer: "Spider-Man"
  }, {
    question: "Who is Peter Porker?",
    choices: ["Spider-Ham", "Spider-Man", "Thor", "Hawkeye"],
    answer: "Spider-Ham"
  }, {
    question: "Who is James Buchanon Barnes?",
    choices: ["The Winter Soldier", "Spider-Ham", "Spider-Man", "Thor"],
    answer: "The Winter Soldier"
  }, {
    question: "Who is James Rupert Rhodes?",
    choices: ["War Machine", "The Winter Soldier", "Spider-Ham", "Spider-Man"],
    answer: "War Machine"
  }, {
    question: "Who is Wade Wilson?",
    choices: ["Deadpool", "War Machine", "The Winter Soldier", "Spider-Ham"],
    answer: "Deadpool"
  }, {
    question: "Who is Scott Summers?",
    choices: ["Cyclops", "Deadpool", "War Machine", "The Winter Soldier"],
    answer: "Cyclops"
  }, {
    question: "Who is James Howlett?",
    choices: ["Wolverine", "Cyclops", "Deadpool", "War Machine"],
    answer: "Wolverine"
  }, {
    question: "Who is Remy LeBeau?",
    choices: ["Gambit", "Wolverine", "Cyclops", "Deadpool"],
    answer: "Gambit"
  }, {
    question: "Who is Clint Barton?",
    choices: ["Hawkeye", "Gambit", "Wolverine", "Cyclops"],
    answer: "Hawkeye"
  }, {
    question: "Who is Donald Blake?",
    choices: ["Thor", "Hawkeye", "Gambit", "Wolverine"],
    answer: "Thor"
  }
];

//set global variables to be used later
const gameplay = document.querySelector("#gameplay");
const jumbotron = document.querySelector(".jumbotron");
let counter, playerScore, timer, intervalId, currentAnswer, quizSelected;
const topListNum = 10;
let questionArray = [];
let highScores = [];
let storageScores = [];

//initial load of page, also resets game if player decides to play another round
const pageLoad = () => {
  counter = 0;
  currentAnswer = "";
  intervalId = 0;
  playerScore = 0;
  questionArray = [];
  quizSelected = "";
  timer = 150;
  //dynamically create button to select playing with the Female Super Hero questions
  let fStartButton = document.createElement("button");
  fStartButton.setAttribute("class", "btn btn-lg btn-dark m-3 sBtn");
  fStartButton.setAttribute("type", "button");
  fStartButton.setAttribute("id", "fStartButton");
  fStartButton.innerHTML = "Female Heroes"
  //add Female Heroes button to the page
  gameplay.appendChild(fStartButton);
  //dynamically create button to select playing with the Male Super Hero questions
  let mStartButton = document.createElement("button");
  mStartButton.setAttribute("class", "btn btn-lg btn-dark m-3 sBtn");
  mStartButton.setAttribute("type", "button");
  mStartButton.setAttribute("id", "mStartButton");
  mStartButton.innerHTML = "Male Heroes"
  //add Male Heroes button to the page
  gameplay.appendChild(mStartButton);
  //add click event to each button
  let btnEls = document.querySelectorAll(".sBtn")
  for (let i = 0; i < btnEls.length; i++) {
    let buttonEl = btnEls[i];
    buttonEl.addEventListener("click", function () {
      quizSelected = buttonEl.innerHTML;
      //starts the game
      startGame(quizSelected);
    })
  };
}

pageLoad();

//Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  let currentIndex = array.length, tempValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return array;
};

const startGame = (quizSelected) => {
  //If Female Heroes is selected, grab High Scores from local storage for Female Hero Quiz
  if (quizSelected === "Female Heroes") {
    questionArray = questionArray.concat(femaleSuperHeroes);
    //If Male Heroes is selected, grab High Scores from local storage for Male Hero Quiz
  } else if (quizSelected === "Male Heroes") {
    questionArray = questionArray.concat(maleSuperHeroes);
  }
  //take string from local storage and convert it to JSON object
  storageScores = JSON.parse(localStorage.getItem(quizSelected));
  //if there is local storage data, set it to high scores array
  if (storageScores) {
    highScores = storageScores;
  };
  //shuffle the question array to randomize the question order
  shuffleArray(questionArray);
  //empty the game play <div>
  gameplay.innerHTML = "";
  //dynimcally create a Bootstrap Card component to display the questions and add it to the newly emptied game play <div>
  let qCard = document.createElement("div");
  qCard.setAttribute("class", "card");
  gameplay.appendChild(qCard);
  let cHead = document.createElement("div");
  cHead.setAttribute("class", "card-head p-3");
  cHead.setAttribute("id", "question");
  qCard.appendChild(cHead);
  let cList = document.createElement("ul");
  cList.setAttribute("class", "list-group list-group-flush");
  qCard.appendChild(cList);
  //try to find a way to do these next steps in a for loop in an attempt to keep it DRY
  let answer1 = document.createElement("li");
  answer1.setAttribute("class", "list-group-item answer");
  answer1.setAttribute("id", "answer1");
  cList.appendChild(answer1);
  let answer2 = document.createElement("li");
  answer2.setAttribute("class", "list-group-item answer");
  answer2.setAttribute("id", "answer2");
  cList.appendChild(answer2);
  let answer3 = document.createElement("li");
  answer3.setAttribute("class", "list-group-item answer");
  answer3.setAttribute("id", "answer3");
  cList.appendChild(answer3);
  let answer4 = document.createElement("li");
  answer4.setAttribute("class", "list-group-item answer");
  answer4.setAttribute("id", "answer4");
  cList.appendChild(answer4);
  //add click event listener on the answer elements
  let answerEls = document.querySelectorAll(".answer")
  for (let i = 0; i < answerEls.length; i++) {
    let answerEl = answerEls[i];
    answerEl.addEventListener("click", function () {
      //when an answer is clicked, run the checkAnswer function to see if it is correct
      checkAnswer(answerEl.innerHTML);
    })
  };
  //load the first question
  loadQuestion();
  //start the countdown timer
  startTimer();
}

const startTimer = () => {
  //if the timer is running, stop and reset it
  stopTimer();
  // set interval to run decrement every 1000ms (1sec)
  intervalId = setInterval(decrement, 1000);
};

const decrement = () => {
  let clock = document.querySelector("#timer");
  //subtract 1 from timer and write new value on the page
  timer--;
  clock.innerHTML = timer;
  //if the timer runs out stop the clock and end game
  if (timer === 0) {
    stopTimer();
    endGame();
  }
};

const stopTimer = () => {
  //clear the interval
  clearInterval(intervalId);
  //reset the timer to 150
  timer = 150;
}

//add questions and answers to card element from the next object in question array
const loadQuestion = () => {
  //gran the required information from the object and assign them to variables
  let currentQuestion = questionArray[counter].question;
  let currentQuestionArray = shuffleArray(questionArray[counter].choices);
  currentAnswer = questionArray[counter].answer;
  //take those variables and write them to the page
  document.querySelector("#question").innerHTML = currentQuestion;
  document.querySelector("#answer1").innerHTML = currentQuestionArray[0];
  document.querySelector("#answer2").innerHTML = currentQuestionArray[1];
  document.querySelector("#answer3").innerHTML = currentQuestionArray[2];
  document.querySelector("#answer4").innerHTML = currentQuestionArray[3];
  document.querySelector("#timer").innerHTML = timer;
};

const checkAnswer = (guess) => {
  //add 1 to the counter so the next question in the array will be loaded
  counter++;
  //if the guess is correct, change the jumbotron to green for 1 second
  if (guess === currentAnswer) {
    jumbotron.setAttribute("class", "jumbotron text-center correct");
    setTimeout(function () {
      jumbotron.setAttribute("class", "jumbotron text-center");
      checkCounter();
    }, 1000);
    //if the guess is incorrect, change the jumbotron to red for 1 second and also supbtract 15 from the timer/score
  } else {
    timer -= 15;
    jumbotron.setAttribute("class", "jumbotron text-center wrong");
    setTimeout(function () {
      jumbotron.setAttribute("class", "jumbotron text-center");
      checkCounter();
    }, 1000);
  };
}

const checkCounter = () => {
  //check to see if there are any more questions left
  if (counter < questionArray.length) {
    //if there are, load the next question
    loadQuestion();
  } else {
    //if not, end the game
    endGame();
  }
};

const endGame = () => {
  //set the player score to whatever time is remaining in the timer
  playerScore = timer;
  stopTimer();
  document.querySelector("#timer").innerHTML = "Game Over";
  //empty the game play <div>
  gameplay.innerHTML = "";
  //create new input field for player to record their score
  let setScore = document.createElement("div");
  gameplay.appendChild(setScore);
  let input = document.createElement("div");
  input.setAttribute("class", "input-group mb-3");
  setScore.appendChild(input);
  let group = document.createElement("div");
  group.setAttribute("class", "input-group-prepend");
  input.appendChild(group);
  let label = document.createElement("input");
  label.setAttribute("type", "text");
  label.setAttribute("class", "form-control");
  label.setAttribute("id", "userInput");
  label.setAttribute("placeholder", "Enter your initials to save your score.");
  label.setAttribute("aria-label", "Enter your initials to save your score.");
  label.setAttribute("aria-describedby", "buttonId");
  input.appendChild(label);
  let button = document.createElement("button");
  button.setAttribute("class", "btn btn-outline-secondary");
  button.setAttribute("type", "button");
  button.setAttribute("id", "buttonId");
  button.innerText = "Submit"
  group.appendChild(button);
  document.getElementById("buttonId").addEventListener("click", function () {
    let name = document.getElementById("userInput")
    console.log(name.value);
    showHighScore(name.value);
  });
};

const showHighScore = (name) => {
  gameplay.innerHTML = "";
  let sessionScore = name + ": " + playerScore;
  document.querySelector("#timer").innerHTML = sessionScore;
  highScores.push({ "name": name, "score": playerScore });
  console.log(highScores);
  highScores.sort(function (a, b) {
    return b.score - a.score
  });
  // let scoreBoard = document.createElement("div");
  // scoreBoard.setAttribute("class", "row justify-content-center scoreboard");
  // gameplay.parentNode.parentNode.appendChild(scoreBoard);
  // if (highScores.length < topListNum) {
  //   for (let i = 0; i < highScores.length; i++) {
  //     scoreBoard.innerHTML +=
  //     "<div class='col-6 text-right'>" +
  //       "<h4>" + highScores[i].name + ":</h4>" +
  //     "</div>" +
  //     "<div class='col-6'>" +
  //       "<h4>" + highScores[i].score + "</h4>" +
  //     "</div>"
  //   }
  // } else {
  //   for (let i = 0; i < topListNum; i++) {
  //     scoreBoard.innerHTML +=
  //     "<div class='col-6 text-right'>" +
  //       "<h4>" + highScores[i].name + ":</h4>" +
  //     "</div>" +
  //     "<div class='col-6'>" +
  //       "<h4>" + highScores[i].score + "</h4>" +
  //     "</div>"
  //   }
  // };
  console.log(highScores);
  localStorage.setItem(quizSelected, JSON.stringify(highScores));
  pageLoad();
};