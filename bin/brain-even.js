#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
// Question 79

userName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
// cli.js скопировал +console.log
// рандомное число
function getRandomNumber() {
  return Math.floor(Math.random() * (100));
}
const randomNumber = getRandomNumber();
// рандомное число
// выводим рандомсное чисол
console.log(`Question: ${randomNumber}`);
// выводим рандомсное чисол
// вводи да или нет
const answer = readlineSync.question('Your answer: ');
// вводи да или нет
if (randomNumber % 2 === 0){
  
}

if (answer !== 'yes' || answer !== 'no') {
  console.log(`${answer} is wrong answer ;(. Correct answer was 'иди нахуй'`);
  console.log("Let's try again, Bill!");
}