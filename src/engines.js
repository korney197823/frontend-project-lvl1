import readlineSync from 'readline-sync';

// Random number generation
const counter = 3;

const startGame = (description, gameOptions) => {
  let counterSuccessAnswer = 0;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name?: ');
  console.log(`Hello, ${userName}`);
  console.log(description);

  while (counterSuccessAnswer < counter) {
    const { question, answer: correctAnswer } = gameOptions();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }

    console.log('Correct!');
    counterSuccessAnswer += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
