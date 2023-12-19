#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
// cli.js скопировал +console.log
function getRandomNumber() {
  return Math.floor(Math.random() * (100));
}
const randomNumber = getRandomNumber();
// рандомное число
for (let i = 0; i < 3; i += 1) {
  // рандомное число
  // выводим рандомсное чисол
  console.log(`Question: ${randomNumber}`);
  // выводим рандомсное чисол
  // вводи да или нет
  const answer = readlineSync.question('Your answer: ');
  // вводи да или нет
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
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (randomNumber % 2 !== 0 && answer === 'yes') {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'no'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (answer !== 'no' && answer !== 'yes' && randomNumber % 2 === 0) {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (answer !== 'no' && answer !== 'yes' && randomNumber % 2 !== 0) {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'no'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  // ответил неправиильно
}
