import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
export const brainPraim = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let correctAnswer = '';
  const number = getRandomNumber(100);

  // eslint-disable-next-line consistent-return
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
      return num > 1;
    }
  };

  if (isPrime(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  console.log(description);
  console.log('Question: ', number);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};
