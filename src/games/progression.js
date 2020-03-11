import { startGame, getRandomNumber } from '../index.js';

const description = 'What number is missing in the progression?';

const brainProgression = () => {
  const progressionLength = 10;

  let elementProgression = getRandomNumber(10);
  const step = getRandomNumber(10);
  const answerIndex = getRandomNumber(10);

  const progressions = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progressions.push(elementProgression);
    elementProgression += step;
  }

  const correctAnswer = String(progressions[answerIndex]);
  progressions[answerIndex] = '..';

  const question = `${progressions.join(' ')}`;

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(description, brainProgression);
