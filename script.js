const readlineSync = require("readline-sync");
const { addScore } = require("./handleScores");


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
console.log(`${value} : ${ans[value]}`)
}
}
const calculateScore = (i, input) =>{
if(input.toLowerCase() === questions[i].correctAnswer){
    score++;
}
}
const displayQuestion = (i) =>{
    console.log(questions[i].question)
    displayOptions(questions[i].answers)
    var input = readlineSync.question("Enter a/b/c/d")
calculateScore(i, input)
}
for(var i = 0; i < questions.length; i++){
    displayQuestion(i)
}

console.log(`You scored : ${score}/${questions.length}`)
const userName = readlineSync.question("Enter your name: ");
addScore(userName, score);
console.log("✅ Your score has been saved to scores.json!");
