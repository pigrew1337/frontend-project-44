#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

let correctAnswersCount = 0;

for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');

  if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
    correctAnswersCount += 1;

    if (correctAnswersCount === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was '${randomNumber % 2 === 0 ? 'yes' : 'no'}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
