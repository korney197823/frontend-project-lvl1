import readlineSync from 'readline-sync';
import { getRandomNumber, welcome } from '../index';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomNumber(operations.length)];
};

export const calc = () => {
  console.log('What is the result of the expression?');

  let countCorrectAnswers = 0;

  while (countCorrectAnswers < numberOfAttempts) {
    const operation = getRandomOperation();
    const numberOne = getRandomNumber(100);
    const numberTwo = getRandomNumber(100);

    // eslint-disable-next-line no-unused-vars
    let question = '';
    // eslint-disable-next-line no-unused-vars
    let correctAnswer = 0;

    if (operation === '+') {
      question = `${numberOne} + ${numberTwo}`;
      correctAnswer = numberOne + numberTwo;
    } else if (operation === '*') {
      question = `${numberOne} * ${numberTwo}`;
      correctAnswer = numberOne * numberTwo;
    } else if (operation === '-') {
      question = `${numberOne} - ${numberTwo}`;
      correctAnswer = numberOne - numberTwo;
    }
    console.log('Question: ', question);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${welcome.getName()}!`);
      break;
    }
  }
  if (countCorrectAnswers === numberOfAttempts) {
    console.log(`Congratulations, ${welcome.getName()}!`);
  }
};
