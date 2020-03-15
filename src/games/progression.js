import { startGame, getRandomNumber } from '../engines.js';

const description = 'What number is missing in the progression?';

const progression = () => {
  const progressionLength = 10;

  let elementProgression = getRandomNumber(10);
  const step = getRandomNumber(10);
  const answerIndex = getRandomNumber(progressionLength - 1);

  const progressions = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progressions.push(elementProgression);
    elementProgression += step;
  }

  const answer = String(progressions[answerIndex]);
  progressions[answerIndex] = '..';

  const question = `${progressions.join(' ')}`;

  return {
    question,
    answer,
  };
};

export default () => startGame(description, progression);
