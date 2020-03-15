import startGame from '../engines.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPraim = () => {
  let answer = '';
  const question = getRandomNumber(0, 100);

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

  answer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => startGame(description, brainPraim);
