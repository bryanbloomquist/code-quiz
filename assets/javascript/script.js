const questionArray = [
  {
    question: "Who is Kamala Khan?",
    choices: ["Ms. Marvel", "Spider-Woman", "The Mighty Thor", "Ironheart"],
    answer: "Ms. Marvel",
  }, {
    question: "Who is Doreen Green?",
    choices: ["Squirrel Girl", "Ms. Marvel", "Spider-Woman", "The Mighty Thor"],
    answer: "Squirrel Girl",
  }, {
    question: "Who is Gwen Poole?",
    choices: ["Gwenpool", "Squirrel Girl", "Ms. Marvel", "Spider-Woman"],
    answer: "Gwenpool",
  }, {
    question: "Who is Nadia Van Dyne?",
    choices: ["Wasp", "Gwenpool", "Squirrel Girl", "Ms. Marvel"],
    answer: "Wasp",
  }, {
    question: "Who is Jennifer Walters?",
    choices: ["She-Hulk", "Wasp", "Gwenpool", "Squirrel Girl"],
    answer: "She-Hulk",
  }, {
    question: "Who is Kate Bishop?",
    choices: ["Hawkeye", "She-Hulk", "Wasp", "Gwenpool"],
    answer: "Hawkeye",
  }, {
    question: "Who is Patsy Walker?",
    choices: ["Hellcat", "Hawkeye", "She-Hulk", "Wasp"],
    answer: "Hellcat",
  }, {
    question: "Who is Riri Williams?",
    choices: ["Ironheart", "Hellcat", "Hawkeye", "She-Hulk"],
    answer: "Ironheart",
  }, {
    question: "Who is Jane Foster",
    choices: ["The Mighty Thor", "Ironheart", "Hellcat", "Hawkeye"],
    answer: "The Mighty Thor",
  }, {
    question: "Who is Jessica Drew?",
    choices: ["Spider-Woman", "The Mighty Thor", "Ironheart", "Hellcat"],
    answer: "Spider-Woman",
  }
];

const gameplay = document.querySelector("#gameplay");

let counter = 0;
let playerScore = 0;
let timer = 15;
let currentAnswer = "";
let intervalId = 0;

const pageLoad = () => {
  //create a new button element
  let startButton = document.createElement("button");
  //add attributes to newly created button
  startButton.setAttribute("class", "btn btn-lg btn-dark m-5");
  startButton.setAttribute("type", "button");
  startButton.setAttribute("id", "startButton");
  startButton.innerHTML = "Start Quiz"
  //append button to the DOM
  gameplay.appendChild(startButton);
  //add click event to dynamically created button
  document.getElementById("startButton").addEventListener("click", function () {
    startGame();
  });
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

const startGame = () => {
  //suffle question array
  shuffleArray(questionArray);
  //remove start button from DOM
  gameplay.removeChild(startButton);
  //create new card div to display the questions and answers
  let qCard = document.createElement("div");
  qCard.setAttribute("class", "card border border-success");
  gameplay.appendChild(qCard);
  //add card heading for the question
  let cHead = document.createElement("div");
  cHead.setAttribute("class", "card-head p-3");
  cHead.setAttribute("id", "question");
  qCard.appendChild(cHead);
  //create list for the answers
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
  //add event listeners to answers elements
  let answerEls = document.querySelectorAll(".answer")
  for (let i = 0; i < answerEls.length; i++) {
    let answerEl = answerEls[i];
    answerEl.addEventListener("click", function () {
      let guess = answerEl.innerHTML;
      checkAnswer(guess);
    })
  };
  loadQuestion();
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
    checkAnswer();
  }
};

const stopTimer = () => {
  clearInterval(intervalId);
  timer = 15;
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
  startTimer();
};

const checkAnswer = (guess) => {
  counter++;
  stopTimer();
  if (timer === 0) {
    document.querySelector(".jumbotron").setAttribute("class", "jumbotron border border-secondary text-center wrong");
    console.log("you ran out of time");
    setTimeout(function () {
      document.querySelector(".jumbotron").setAttribute("class", "jumbotron border border-secondary text-center");
      checkCounter();
    }, 1000);
  } else if (guess === currentAnswer) {
    document.querySelector(".jumbotron").setAttribute("class", "jumbotron border border-secondary text-center correct");
    console.log("you are correct");
    setTimeout(function () {
      document.querySelector(".jumbotron").setAttribute("class", "jumbotron border border-secondary text-center");
      checkCounter();
    }, 1000);
  } else {
    document.querySelector(".jumbotron").setAttribute("class", "jumbotron border border-secondary text-center wrong");
    console.log("you are incorrect");
    setTimeout(function () {
      document.querySelector(".jumbotron").setAttribute("class", "jumbotron border border-secondary text-center");
      checkCounter();
    }, 1000);
  }
}

const checkCounter = () => {
  if (counter < questionArray.length - 1) {
    loadQuestion();
  } else {
    endGame();
  }
};

const endGame = () => {
  console.log("This is the end of the game, it's not coded yet.")
}
