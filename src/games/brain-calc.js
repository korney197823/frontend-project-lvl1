import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomNumber(operations.length)];
};

const calc = () => {
  const description = 'What is the result of the expression?';
  const operation = getRandomOperation();
  const numberOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(100);
  const question = `${numberOne} ${operation} ${numberTwo}`;

  function computedResult(numOne, numTwo, operator) {
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
  }

  const correctAnswer = computedResult(numberOne, numberTwo, operation);

  console.log(description);
  console.log('Question: ', question);
  const answer = Number(readlineSync.question('Your answer: '));
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

export default calc;
