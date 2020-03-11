
import { getRandomNumber, startGame } from '../index.js';

const isEven = (number) => number % 2 === 0;
const description = "Answer 'yes' if the number is even, otherwise answer 'no'";

const brainEven = () => {
  const question = getRandomNumber(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(description, brainEven);
