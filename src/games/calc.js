import playGame from '../engines.js';
import getRandomNumber from '../utils.js';

const operations = ['+', '-', '*'];

const calculate = (numOne, numTwo, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = numOne + numTwo;
      break;
    case '-':
      result = numOne - numTwo;
      break;
    case '*':
      result = numOne * numTwo;
      break;
    default:
      return null;
  }
  return result;
};

const description = 'What is the result of the expression?';

const calc = () => {
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const numberOne = getRandomNumber(0, 100);
  const numberTwo = getRandomNumber(0, 100);
  const question = `${numberOne} ${operation} ${numberTwo}`;

  const answer = String(calculate(numberOne, numberTwo, operation));
  return {
    question,
    answer,
  };
};

export default () => playGame(description, calc);
