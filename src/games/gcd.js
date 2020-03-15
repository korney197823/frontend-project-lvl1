import startGame from '../engines.js';
import getRandomNumber from '../utils.js';

const findGreatestCommonDivisor = (x, y) => {
  let numOne = x;
  let numTwo = y;
  while (numTwo !== 0) numTwo = numOne % (numOne = numTwo);
  return numOne;
};

const description = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const numberOne = getRandomNumber(0, 100);
  const numberTwo = getRandomNumber(0, 100);
  const question = `${numberOne} ${numberTwo}`;

  const answer = String(findGreatestCommonDivisor(numberOne, numberTwo));

  return {
    question,
    answer,
  };
};

export default () => startGame(description, gcd);
