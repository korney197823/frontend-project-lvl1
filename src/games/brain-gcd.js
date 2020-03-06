import { startGame, getRandomNumber } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const braingcd = () => {
  const numberOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(100);
  const question = `${numberOne} ${numberTwo}`;

  const findGreatestCommonDivisor = (x, y) => {
    let numOne = x;
    let numTwo = y;
    while (numTwo !== 0) numTwo = numOne % (numOne = numTwo);
    return numOne;
  };

  const correctAnswer = String(findGreatestCommonDivisor(numberOne, numberTwo));

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(description, braingcd);
