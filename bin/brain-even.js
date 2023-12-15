#!/usr/bin/env node
import userName from '../src/cli.js';

userName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
// cli.js скопировал +console.log
// рандомное число
function getRandomNumber() {
  return Math.floor(Math.random() * (100));
}
let randomNumber = getRandomNumber();
// рандомное число
console.log(`Question: ${randomNumber}`);
// Question 79
