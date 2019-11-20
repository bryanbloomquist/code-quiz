//default layout to add new quizzes later
// const arrrayname = [
//   {
//     question: "?",
//     choices: ["", "", "", ""],
//     answer: ""
//   }
// ]

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
    choices: ["Spider-Man", "Thor", "Hawkeye", "The Incredible Hulk"],
    answer: "Spider-Man"
  }, {
    question: "Who is Scott Lang?",
    choices: ["Ant-Man", "Spider-Man", "Thor", "Hawkeye"],
    answer: "Ant-Man"
  }, {
    question: "Who is James Buchanon Barnes?",
    choices: ["The Winter Soldier", "Ant-Man", "Spider-Man", "Thor"],
    answer: "The Winter Soldier"
  }, {
    question: "Who is James Rupert Rhodes?",
    choices: ["War Machine", "The Winter Soldier", "Ant-Man", "Spider-Man"],
    answer: "War Machine"
  }, {
    question: "Who is Tony Stark?",
    choices: ["Iron Man", "War Machine", "The Winter Soldier", "Ant-Man"],
    answer: "Iron Man"
  }, {
    question: "Who is Stephen Strange?",
    choices: ["Doctor Strange", "Iron Man", "War Machine", "The Winter Soldier"],
    answer: "Doctor Strange"
  }, {
    question: "Who is Steve Rogers?",
    choices: ["Captain America", "Doctor Strange", "Iron Man", "War Machine"],
    answer: "Captain America"
  }, {
    question: "Who is David Bruce Banner?",
    choices: ["The Incredible Hulk", "Captain America", "Doctor Strange", "Iron Man"],
    answer: "The Incredible Hulk"
  }, {
    question: "Who is Clint Barton?",
    choices: ["Hawkeye", "The Incredible Hulk", "Captain America", "Doctor Strange"],
    answer: "Hawkeye"
  }, {
    question: "Who is Donald Blake?",
    choices: ["Thor", "Hawkeye", "The Incredible Hulk", "Captain America"],
    answer: "Thor"
  }
];
const xMen = [
  {
    question: "Who is Remy LeBeau?",
    choices: ["Gambit", "Beast", "Angel", "Marvel Girl"],
    answer: "Gambit"
  }, {
    question: "Who is Anna Raven?",
    choices: ["Rogue", "Gambit", "Beast", "Angel"],
    answer: "Rogue"
  }, {
    question: "Who is Scott Summers?",
    choices: ["Cyclops", "Rogue", "Gambit", "Beast"],
    answer: "Cyclops"
  }, {
    question: "Who is Ororo Munroe?",
    choices: ["Storm", "Cyclops", "Rogue", "Gambit"],
    answer: "Storm"
  }, {
    question: "Who is James Howlett?",
    choices: ["Wolverine", "Storm", "Cyclops", "Rogue"],
    answer: "Wolverine"
  }, {
    question: "Who is Kitty Pryde?",
    choices: ["Shadowcat", "Wolverine", "Storm", "Cyclops"],
    answer: "Shadowcat"
  }, {
    question: "Who is Robert Drake?",
    choices: ["Iceman", "Shadowcat", "Wolverine", "Storm"],
    answer: "Iceman"
  }, {
    question: "Who is Jean Grey?",
    choices: ["Marvel Girl", "Iceman", "Shadowcat", "Wolverine"],
    answer: "Marvel Girl"
  }, {
    question: "Who is Warren Worthington III?",
    choices: ["Angel", "Marvel Girl", "Iceman", "Shadowcat"],
    answer: "Angel"
  }, {
    question: "Who is Hank McCoy?",
    choices: ["Beast", "Angel", "Marvel Girl", "Iceman"],
    answer: "Beast"
  }
];
const spiderVillains = [
  {
    question: "Who is MacDonald Gargan?",
    choices: ["Scorpion", "Lizard", "Green Goblin", "Kraven the Hunter"],
    answer: "Scorpion"
  }, {
    question: "Who is Quentin Beck?",
    choices: ["Mysterio", "Scorpion", "Lizard", "Green Goblin"],
    answer: "Mysterio"
  }, {
    question: "Who is Maxwell Dillon?",
    choices: ["Electro", "Mysterio", "Scorpion", "Lizard"],
    answer: "Electro"
  }, {
    question: "Who is Adrian Toomes?",
    choices: ["Vulture", "Electro", "Mysterio", "Scorpion"],
    answer: "Vulture"
  }, {
    question: "Who is William Baker?",
    choices: ["Sandman", "Vulture", "Electro", "Mysterio"],
    answer: "Sandman"
  }, {
    question: "Who is Dr. Otto Octavius?",
    choices: ["Doctor Octopus", "Sandman", "Vulture", "Electro"],
    answer: "Doctor Octopus"
  }, {
    question: "Who is Aleksei Sytsevich?",
    choices: ["Rhino", "Doctor Octopus", "Sandman", "Vulture"],
    answer: "Rhino"
  }, {
    question: "Who is Sergei Kravinoff?",
    choices: ["Kraven the Hunter", "Rhino", "Doctor Octopus", "Sandman"],
    answer: "Kraven the Hunter"
  }, {
    question: "Who is Norman Osborn?",
    choices: ["Green Goblin", "Kraven the Hunter", "Rhino", "Doctor Octopus"],
    answer: "Green Goblin"
  }, {
    question: "Who is Dr. Curt Connors?",
    choices: ["Lizard", "Green Goblin", "Kraven the Hunter", "Rhino"],
    answer: "Lizard"
  }
];
const quizArray = [
  {
    name: "Female Heroes",
    id: "femaleSuperHeroes",
    quiz: femaleSuperHeroes
  }, {
    name: "Male Heroes",
    id: "maleSuperHeroes",
    quiz: maleSuperHeroes
  }, {
    name: "X-Men",
    id: "xMen",
    quiz: xMen
  }, {
    name: "Spidey Villains",
    id: "spiderVillains",
    quiz: spiderVillains
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

//function to add multiple attributes in one line of setAttribute found at https://stackoverflow.com/a/12274782/10366482
const setAttributes = (element, attribute) => {
  for (var key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
};

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

//initial load of page, also resets game if player decides to play another round
const pageLoad = () => {
  counter = 0;
  currentAnswer = "";
  intervalId = 0;
  playerScore = 0;
  questionArray = [];
  quizSelected = "";
  timer = 150;
  //dynamically create a button for each array in quiz array
  for (let i = 0; i < quizArray.length; i++){
    let button = document.createElement("button");
    setAttributes(button, {"class": "btn btn-block btn-dark mb-3 sBtn", "type": "button", "id": quizArray[i].id});
    button.innerText = quizArray[i].name;
    gameplay.appendChild(button);
  }
  //add click event to each button
  let btnEls = document.querySelectorAll(".sBtn")
  for (let i = 0; i < btnEls.length; i++) {
    let buttonEl = btnEls[i];
    buttonEl.addEventListener("click", function () {
      quizSelected = buttonEl.id;
      //starts the game
      startGame(quizSelected);
    })
  };
}

pageLoad();

const startGame = (quizSelected) => {
  const result = quizArray.find( ({id}) => id === quizSelected );
  questionArray = result.quiz;
  //take string from local storage and convert it to JSON object
  storageScores = JSON.parse(localStorage.getItem(result.id));
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
  setAttributes(cHead, {"class": "card-head p-3", "id": "question"});
  qCard.appendChild(cHead);
  let cList = document.createElement("ul");
  cList.setAttribute("class", "list-group list-group-flush");
  qCard.appendChild(cList);
  //create list elements for each possible answer and append to ul
  for (let i = 0; i < questionArray[0].choices.length; i++) {
    let answer = document.createElement("li");
    setAttributes(answer, {"class": "list-group-item answer", "id": "answer"+i});
    cList.appendChild(answer);
  };
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
  if (timer <= 0) {
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
  for (let i=0; i<currentQuestionArray.length; i++){
    document.querySelector("#answer"+i).innerHTML = currentQuestionArray[i];
  };
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
  setScore.setAttribute("class", "input-group mb-3");
  gameplay.appendChild(setScore);
  let input = document.createElement("input");
  setAttributes(input, {"type": "text", "class": "form-control", "id": "userInput", "placeholder": "Enter your name to save your score."});
  setScore.appendChild(input);
  let inputGroup = document.createElement("div");
  inputGroup.setAttribute("class", "input-group-append");
  setScore.appendChild(inputGroup);
  let button = document.createElement("button");
  setAttributes(button, {"class": "btn btn-outline-secondary", "type": "submit", "id": "buttonId"})
  button.innerText = "Submit"
  inputGroup.appendChild(button);
  //add event listener to button to submit user input
  document.getElementById("buttonId").addEventListener("click", function () {
    let name = document.getElementById("userInput").value;
    showHighScore(name);
  });
};

const showHighScore = (name) => {
  //clear the game play area
  gameplay.innerHTML = "";
  //display the players name and score in the jumbotron
  document.querySelector("#timer").innerHTML = name + ": " + playerScore;
  //add player score to highscore aray
  highScores.push({ "name": name, "score": playerScore });
  //sort high score list from highest to lowest scores
  highScores.sort(function (a, b) {
    return b.score - a.score
  });
  //remove any score after 10 because we only want to store the top ten scores
  highScores = highScores.slice(0, 10);
  let scoreBoard = document.createElement("div");
  scoreBoard.setAttribute("class", "scoreboard mb-3");
  gameplay.appendChild(scoreBoard);
  for (let i = 0; i < highScores.length; i++) {
    scoreBoard.innerHTML+= "<h4>" + highScores[i].name + " : " + highScores[i].score + "</h4>";
  }
  localStorage.setItem(quizSelected, JSON.stringify(highScores));
  pageLoad();
};