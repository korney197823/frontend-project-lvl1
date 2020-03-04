import { startGame, getRandomNumber } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPraim = () => {
  let correctAnswer = '';
  const question = getRandomNumber(100);

  // eslint-disable-next-line consistent-return
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= (num / 2); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  if (isPrime(question)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(description, brainPraim);
