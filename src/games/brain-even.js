import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';


// Check if the number is even
const isEven = (number) => number % 2 === 0;

const brainEven = () => {
  const description = "Answer 'yes' if the number is even, otherwise answer 'no'";
  const number = getRandomNumber(100);

  const correctAnswer = isEven(number) ? 'yes' : 'no';

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

export default brainEven;
