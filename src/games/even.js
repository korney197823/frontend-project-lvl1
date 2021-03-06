import playGame from '../engine.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;
const description = "Answer 'yes' if the number is even, otherwise answer 'no'";

const getEvenData = () => {
  const question = getRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

export default () => playGame(description, getEvenData);
