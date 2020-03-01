import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const braingcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const numberOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(100);

  const nod = (x, y) => {
    // eslint-disable-next-line no-param-reassign
    while (y !== 0) y = x % (x = y);
    return x;
  };

  const correctAnswer = nod(numberOne, numberTwo);

  console.log(description);
  console.log(`Question: ${numberOne} ${numberTwo}`);

  const answer = Number(readlineSync.question('Your answer: '));
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

export default braingcd;
