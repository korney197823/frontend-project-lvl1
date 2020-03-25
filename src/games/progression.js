import playGame from '../engine.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgressionData = () => {
  const progressionLength = 10;

  const startElement = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 10);
  const answerIndex = getRandomNumber(0, progressionLength - 1);

  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const progressionElement = startElement + step * i;
    progression.push(progressionElement);
  }

  const answer = String(progression[answerIndex]);
  progression[answerIndex] = '..';

  const question = String(progression.join(' '));

  return {
    question,
    answer,
  };
};

export default () => playGame(description, getProgressionData);
