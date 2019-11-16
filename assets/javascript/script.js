const questionArray = [
  {
    question: "",
    choices: [

    ],
    answer: "",
  },{
    question: "",
    choices: [

    ],
    answer: "",
  },{
    question: "",
    choices: [

    ],
    answer: "",
  },{
    question: "",
    choices: [

    ],
    answer: "",
  },{
    question: "",
    choices: [

    ],
    answer: "",
  },{
    question: "",
    choices: [

    ],
    answer: "",
  },{
    question: "",
    choices: [

    ],
    answer: "",
  },{
    question: "",
    choices: [

    ],
    answer: "",
  },{
    question: "",
    choices: [

    ],
    answer: "",
  },{
    question: "",
    choices: [

    ],
    answer: "",
  }
];

const gameplay = document.querySelector("#gameplay");

const pageLoad = () => {
  let startButton = document.createElement("button");
  startButton.setAttribute("class","btn btn-lg btn-dark m-5");
  startButton.setAttribute("type", "button");
  startButton.setAttribute("id", "startButton");
  startButton.innerHTML = "start quiz"
  gameplay.appendChild(startButton);
  console.log(startButton);
}

pageLoad();

document.getElementById("startButton").addEventListener("click", function() {
  startGame();
});

const startGame = () => {

}
