import readlineSync from 'readline-sync';

// Random number generation
export const getRandomNumber = (n) => Math.floor(Math.random() * n);

export const startGame = (description, gameOptions) => {
  let countSuccessAnswers = 0;
  const numberOfAttempts = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name?: ');
  console.log(`Hello, ${userName}`);
  console.log(description);

  while (countSuccessAnswers < numberOfAttempts) {
    const { question, correctAnswer } = gameOptions();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      countSuccessAnswers += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      break;
    }
  }

  if (countSuccessAnswers === numberOfAttempts) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
};
