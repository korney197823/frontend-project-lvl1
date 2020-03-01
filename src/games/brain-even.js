import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';


// Check if the number is even
const isEven = (number) => number % 2 === 0;

// eslint-disable-next-line import/prefer-default-export
export const brainEven = () => {
  const description = "Answer 'yes' if the number is even, otherwise answer 'no'";
  const number = getRandomNumber(100);
  let correctAnswer = '';
  if (isEven(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  console.log(description);
  console.log('Question: ', number);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  return false;
};
