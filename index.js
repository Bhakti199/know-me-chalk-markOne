var readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;
var score = 0;
console.log(chalk.blue("*** Hey, Lets get started ***"));
let queOne = readlineSync.question(chalk.red("What is your name? "));
while (queOne.length === 0) {
  queOne = readlineSync.question(chalk.yellow('Hey, Please enter your name :) '));
}
console.log(chalk.green.underline('Welcome ' + queOne));
console.log(chalk.blue("Lets play KNOW ME game!"));
var j = 0;
function play(question, answer) {
  console.log();
  var str = j + ". " + question;
  var userAnswer = readlineSync.question(str);

  // console.log();
  while (userAnswer.length === 0) {
    userAnswer = readlineSync.question((str));
  }
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green.underline("You are right  :)"));
    score = score + 1;
  } else {
    console.log(chalk.green("You are wrong  :("));
    console.log(chalk.yellow.underline("The correct answer is: " + answer));

    score = score - 1;
  }
}

var question = [{
  question: "What is my name? ",
  answer: "Bhakti"
},
{
  question: "Where do I live? ",
  answer: "Amravati"
},
{
  question: "Which is my favrate color? ",
  answer: "White"
},
{
  question: "What is my favrate food? ",
  answer: "Puranpoli"
},
{
  question: "My favorite show? ",
  answer: "Friends"
},
{
  question: "My favorite actor? ",
  answer: "Richard Madden"
},
{
  question: "Lets say, If we meet what would I prefer Tea/Coffee ",
  answer: "Tea"
}
]
for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i];
  j = j + 1;
  play(currentQuestion.question, currentQuestion.answer)
}
console.log()
console.log(chalk.bgRed.black("Your final score is: " + score))
console.log(chalk.blue("Yay! you did it."));