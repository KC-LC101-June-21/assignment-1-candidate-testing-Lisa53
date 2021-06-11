// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [];
let correctAnswers = "";
let candidateAnswers = [];
let space = " ";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');
 candidateName = input.question("Please enter your name: " );

console.log("Hello," + space + candidateName +"!");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what is at index 2? ", 'What is the minimum crew size for ? ' ];
correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];

for(let i = 0; i < questions.length; i++) {
    const input = require('readline-sync');
    let answers = input.question(questions[i]);
  candidateAnswers.push(answers);
}
  console.log("");

}
function gradeQuiz(candidateAnswers) {
  let grade;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for(let i = 0; i < questions.length; i++) {
console.log(`${1+i}) ${questions[i]}\nYour answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}`);
  console.log("");
}


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};