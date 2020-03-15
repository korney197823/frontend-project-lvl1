
import { getRandomNumber, startGame } from '../engines.js';

const isEven = (number) => number % 2 === 0;
const description = "Answer 'yes' if the number is even, otherwise answer 'no'";

const even = () => {
  const question = getRandomNumber(100);
  const answer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

export default () => startGame(description, even);
