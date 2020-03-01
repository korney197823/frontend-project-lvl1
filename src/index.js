import readlineSync from 'readline-sync';

// Random number generation
export const getRandomNumber = (n) => Math.floor(Math.random() * n);

export const startGame = (gameFunction) => {
  let countSuccessAnswers = 0;
  const numberOfAttempts = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name?: ');
  console.log(`Hello, ${userName}`);

  if (gameFunction !== undefined) {
    while (countSuccessAnswers < numberOfAttempts) {
      let result = false;
      result = gameFunction();
      if (result) {
        countSuccessAnswers += 1;
      } else {
        break;
      }
    }
    if (countSuccessAnswers === numberOfAttempts) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`Let's try again, ${userName}`);
    }
  }
};
