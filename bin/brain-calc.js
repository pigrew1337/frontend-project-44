#!/usr/bin/env node
import readlineSync from 'readline-sync';

function calculateResult(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN; // Если оператор не распознан
  }
}

function generateQuestion() {
  const operators = ['+', '-', '*'];
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculateResult(num1, operator, num2);
  return { question, correctAnswer };
}

function runGame() {
  console.log('brain-calc');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let correctAnswersCount = 0;
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const { question, correctAnswer } = generateQuestion();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!\n');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!\n`);
      break;
    }
  }

  if (correctAnswersCount === maxAttempts) {
    console.log(`Congratulations, ${name}!\n`);
  }
}

runGame();
