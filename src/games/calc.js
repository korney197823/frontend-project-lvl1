import { startGame, getRandomNumber } from '../index.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomNumber(operations.length)];
};

const calculate = (numOne, numTwo, operator) => {
  let result = 0;
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
      return result;
  }
  return result;
};

const description = 'What is the result of the expression?';

const calc = () => {
  const operation = getRandomOperation();
  const numberOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(100);
  const question = `${numberOne} ${operation} ${numberTwo}`;

  const correctAnswer = String(calculate(numberOne, numberTwo, operation));
  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(description, calc);
