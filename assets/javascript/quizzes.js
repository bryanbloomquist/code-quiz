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
const webWarriors = [
  {
    question: "Who is Peter Parker?",
    choices: ["Spider-Man", "Spider-Ham", "Spider-Woman", "Sp//dr"],
    answer: "Spider-Man"
  }, {
    question: "Who is Otto Octavius?",
    choices: ["Superior Spider-Man", "Spider-Man", "Spider-Ham", "Spider-Woman"],
    answer: "Superior Spider-Man"
  }, {
    question: "Who is Benjamin Reilly?",
    choices: ["Scarlet Spider", "Superior Spider-Man", "Spider-Man", "Spider-Ham"],
    answer: "Scarlet Spider"
  }, {
    question: "Who is Hobert Brown?",
    choices: ["Spider Punk", "Scarlet Spider", "Superior Spider-Man", "Spider-Man"],
    answer: "Spider Punk"
  }, {
    question: "Who is Billy Braddock?",
    choices: ["Spider-UK", "Spider Punk", "Scarlet Spider", "Superior Spider-Man"],
    answer: "Spider-UK"
  }, {
    question: "Who is Anya Sofía Corazón?",
    choices: ["Spider-Girl", "Spider-UK", "Spider Punk", "Scarlet Spider"],
    answer: "Spider-Girl"
  }, {
    question: "Who is Gwen Stacey?",
    choices: ["Ghost Spider", "Spider-Girl", "Spider-UK", "Spider Punk"],
    answer: "Ghost Spider"
  }, {
    question: "Who is Peni Parker?",
    choices: ["Sp//dr", "Ghost Spider", "Spider-Girl", "Spider-UK"],
    answer: "Sp//dr"
  }, {
    question: "Who is Jessica Drew?",
    choices: ["Spider-Woman", "Sp//dr", "Ghost Spider", "Spider-Girl"],
    answer: "Spider-Woman"
  }, {
    question: "Who is Peter Porker?",
    choices: ["Spider-Ham", "Spider-Woman", "Sp//dr", "Ghost Spider"],
    answer: "Spider-Ham"
  }
]