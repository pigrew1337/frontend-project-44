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
function ret() {
  const niger = ' ';
  if (randomNumber % 2 === 0) {
    const niger = 'yes';
  } else if (randomNumber % 2 !== 0) {
    const niger = 'no';
  }
  return niger;
}
const neverno = ret;
if (randomNumber % 2 === 0 && answer === 'yes') {
  console.log('Correct!');
}
if (randomNumber % 2 !== 0 && answer === 'no') {
  console.log('Correct!');
}
// вводи да или нет
// ответил неправиильно
if (randomNumber % 2 === 0 && answer === 'no') {
  console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'`);
  console.log("Let's try again, Bill!");
}
if (randomNumber % 2 !== 0 && answer === 'yes') {
  console.log(`${answer} is wrong answer ;(. Correct answer was 'no'`);
  console.log("Let's try again, Bill!");
}
if (answer !== 'no' || answer !== 'yes') {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${neverno}`);
  console.log("Let's try again, Bill!");
}
// ответил неправиильно
