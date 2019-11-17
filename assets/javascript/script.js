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
]

const gameplay = document.querySelector("#gameplay");

let counter, playerScore, timer, intervalId, currentAnswer, array;
let questionArray = [];

const pageLoad = () => {
  counter = 0;
  playerScore = 0;
  timer = 150;
  currentAnswer = "";
  intervalId = 0;
  questionArray = [];
  array = "";
  let fStartButton = document.createElement("button");
  fStartButton.setAttribute("class", "btn btn-lg btn-dark m-3 sBtn");
  fStartButton.setAttribute("type", "button");
  fStartButton.setAttribute("id", "fStartButton");
  fStartButton.innerHTML = "Female Heroes"
  gameplay.appendChild(fStartButton);
  let mStartButton = document.createElement("button");
  mStartButton.setAttribute("class", "btn btn-lg btn-dark m-3 sBtn");
  mStartButton.setAttribute("type", "button");
  mStartButton.setAttribute("id", "mStartButton");
  mStartButton.innerHTML = "Male Heroes"
  gameplay.appendChild(mStartButton);
  let btnEls = document.querySelectorAll(".sBtn")
  for (let i = 0; i < btnEls.length; i++) {
    let buttonEl = btnEls[i];
    buttonEl.addEventListener("click", function () {
      array = buttonEl.innerHTML;
      startGame(array);
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

const startGame = (array) => {
  if (array === "Female Heroes") {
    questionArray = questionArray.concat(femaleSuperHeroes);
  } else if (array === "Male Heroes") {
    questionArray = questionArray.concat(maleSuperHeroes);
  }
  shuffleArray(questionArray);
  gameplay.innerHTML = "";
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
  let answerEls = document.querySelectorAll(".answer")
  for (let i = 0; i < answerEls.length; i++) {
    let answerEl = answerEls[i];
    answerEl.addEventListener("click", function () {
      let guess = answerEl.innerHTML;
      checkAnswer(guess);
    })
  };
  loadQuestion();
  startTimer();
}

const startTimer = () => {
  stopTimer();
  intervalId = setInterval(decrement, 1000);
};

const decrement = () => {
  timer--;
  let clock = document.querySelector("#timer");
  clock.innerHTML = timer;
  if (timer === 0) {
    stopTimer();
    endGame();
  }
};

const stopTimer = () => {
  clearInterval(intervalId);
  timer = 150;
}

//add questions and answers to card element
const loadQuestion = () => {
  let currentQuestion = questionArray[counter].question;
  let currentQuestionArray = shuffleArray(questionArray[counter].choices);
  currentAnswer = questionArray[counter].answer;
  document.querySelector("#question").innerHTML = currentQuestion;
  document.querySelector("#answer1").innerHTML = currentQuestionArray[0];
  document.querySelector("#answer2").innerHTML = currentQuestionArray[1];
  document.querySelector("#answer3").innerHTML = currentQuestionArray[2];
  document.querySelector("#answer4").innerHTML = currentQuestionArray[3];
  document.querySelector("#timer").innerHTML = timer;
};

const checkAnswer = (guess) => {
  counter++;
if (guess === currentAnswer) {
    document.querySelector(".jumbotron").setAttribute("class", "jumbotron text-center correct");
    setTimeout(function () {
      document.querySelector(".jumbotron").setAttribute("class", "jumbotron text-center");
      checkCounter();
    }, 1000);
  } else {
    timer -= 15;
    document.querySelector(".jumbotron").setAttribute("class", "jumbotron text-center wrong");
    setTimeout(function () {
      document.querySelector(".jumbotron").setAttribute("class", "jumbotron text-center");
      checkCounter();
    }, 1000);
  }
}

const checkCounter = () => {
  if (counter < questionArray.length) {
    loadQuestion();
  } else {
    endGame();
  }
};

const endGame = () => {
  playerScore = timer;
  stopTimer();
  document.querySelector("#timer").innerHTML = "Game Over";
  gameplay.innerHTML = "";
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
    let initials = document.getElementById("userInput")
    showHighScore(initials.value);
  });
};

const showHighScore = (initials) => {
  gameplay.innerHTML = "";
  let sessionScore = initials + ': ' + playerScore;
  document.querySelector("#timer").innerHTML = sessionScore;
  localStorage.setItem( array, sessionScore);
  pageLoad();
};