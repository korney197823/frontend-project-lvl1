import readlineSync from 'readline-sync';

// Random number generation
const roundsCount = 3;

const playGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name?: ');
  console.log(`Hello, ${userName}`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, answer: correctAnswer } = getGameData();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
