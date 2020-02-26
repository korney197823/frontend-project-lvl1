import readlineSync from 'readline-sync';

export const instructions = {
  isEven: "Answer 'yes' if the number is even, otherwise answer 'no'",
  calc: 'What is the result of the expression?',
  gcd: 'Find the greatest common divisor of given numbers.',
  progression: 'What number is missing in the progression?',
  prime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

// Random number generation
export const getRandomNumber = (n) => Math.floor(Math.random() * n);

export const startGame = (gameFunction, instruction) => {
  let countSuccessAnswers = 0;
  const numberOfAttempts = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name?: ');
  console.log(`Hello, ${userName}`);

  if (gameFunction !== undefined) {
    console.log(instruction);
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
      console.log(`Congratulations, ${userName}`);
    } else {
      console.log(`Let's try again, ${userName}`);
    }
  }
};
