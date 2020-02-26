import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
export const brainProgression = () => {
  const progressionLength = 10;

  let elementProgression = getRandomNumber(10);
  const step = getRandomNumber(10);
  const answerIndex = getRandomNumber(10);

  const progressions = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progressions.push(elementProgression);
    elementProgression += step;
  }

  const correctAnswer = progressions[answerIndex];
  progressions[answerIndex] = '..';

  console.log(`Question: ${progressions.join(' ')}`);

  const answer = Number(readlineSync.question('Your answer: '));
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};
