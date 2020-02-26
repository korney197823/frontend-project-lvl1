import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomNumber(operations.length)];
};

// eslint-disable-next-line import/prefer-default-export
export const calc = () => {
  const operation = getRandomOperation();
  const numberOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(100);

  let question = '';
  let correctAnswer = 0;

  if (operation === '+') {
    question = `${numberOne} + ${numberTwo}`;
    correctAnswer = numberOne + numberTwo;
  } else if (operation === '*') {
    question = `${numberOne} * ${numberTwo}`;
    correctAnswer = numberOne * numberTwo;
  } else if (operation === '-') {
    question = `${numberOne} - ${numberTwo}`;
    correctAnswer = numberOne - numberTwo;
  }
  console.log('Question: ', question);
  const answer = Number(readlineSync.question('Your answer: '));
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};
