import chalk from "chalk";
import readlineSync from "readline-sync";
import { addScore } from "./handleScores.js";


console.log(chalk.bgMagenta.white.bold("Welcome to the Blackpink Quiz💗!"));
var questions = [
  {
    question: "Which member in blackpink is not Korean?",
    answers: {
      a: "Lisa",
      b: "Jennie",
      c: "Rosé",
      d: "Jisoo"
    },
    correctAnswer: "a"
  } ,
  {
    question: "Which member in blackpink is the main vocalist?",
    answers: {
      a: "Lisa",
      b: "Jennie",
      c: "Rosé",
      d: "Jisoo"
    },
    correctAnswer: "c"
  },
  {
    question: "Which member in blackpink is the lead dancer?",
    answers: {
      a: "Lisa",
      b: "Jennie",
      c: "Rosé",
      d: "Jisoo"
    },
    correctAnswer: "a"
  },
    {
        question: "Which member in blackpink is the main rapper?",
        answers: {
        a: "Lisa",
        b: "Jennie",
        c: "Rosé",
        d: "Jisoo"
        },
        correctAnswer: "b"
    },
    {
        question: "Which member in blackpink is the visual?",
        answers: {
        a: "Lisa",
        b: "Jennie",
        c: "Rosé",
        d: "Jisoo"
        },
        correctAnswer: "d"
    }
]
var score = 0
const displayOptions = (ans) =>{
    for(var value in ans){
console.log(chalk.cyanBright(`${value} : ${ans[value]}`))
}
}
const calculateScore = (i, input) =>{
if(input.toLowerCase() === questions[i].correctAnswer){
      console.log(chalk.greenBright("✅ Correct!\n"));
    score++;
}
 else {
    console.log(chalk.redBright(`❌ Oops! Correct answer was: ${questions[i].correctAnswer.toUpperCase()} - ${questions[i].answers[questions[i].correctAnswer]}\n`));
  }
}
const displayQuestion = (i) =>{
    console.log(chalk.yellowBright.bold(questions[i].question))
    displayOptions(questions[i].answers)
    var input = readlineSync.question(chalk.white.bold("👉 Enter your answer (a/b/c/d): "));
calculateScore(i, input)
}
for(var i = 0; i < questions.length; i++){
    displayQuestion(i)
}

console.log(chalk.bgBlue.white.bold(`\n🌟 You scored: ${score} / ${questions.length} 🌟`));
const userName = readlineSync.question(chalk.magentaBright("Enter your name: "))
addScore(userName, score);
console.log(chalk.bgGreen.black("✅ Your score has been saved to scores.json!"))
