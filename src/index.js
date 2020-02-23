import readlineSync from 'readline-sync';


// Random number generation
function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

// Rundom operator generation
function getRandomOperation() {
  const operations = ['+', '-', '*'];
  return operations[getRandomNumber(operations.length)];
}

// Check if the number is even
function isEven(number) {
  return number % 2 === 0;
}

const numberOfAttempts = 3;

export const welcome = {
  title() {
    console.log('Welcome to the Brain Games!');
  },
  userName: readlineSync.question('May i have your name?: '),
  hello() {
    console.log(`Hello, ${this.userName}`);
  },
  getName() {
    return this.userName;
  },
};

export const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let countCorrectAnswers = 0;

  while (countCorrectAnswers < numberOfAttempts) {
    const number = getRandomNumber(100);

    console.log('Question: ', number);

    const answer = readlineSync.question('Your answer: ');

    if ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no')) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answer === 'yes' ? 'no' : 'yes'}`);
      break;
    }
  }
  if (countCorrectAnswers === numberOfAttempts) {
    console.log(`Congratulations, ${welcome.getName()}!`);
  }
};

export const calc = () => {
  console.log('What is the result of the expression?');

  let countCorrectAnswers = 0;

  while (countCorrectAnswers < numberOfAttempts) {
    const operation = getRandomOperation();
    const numberOne = getRandomNumber(100);
    const numberTwo = getRandomNumber(100);

    // eslint-disable-next-line no-unused-vars
    let question = '';
    // eslint-disable-next-line no-unused-vars
    let correctAnswer = 0;

    if (operation === '+') {
      question = `${numberOne} + ${numberTwo}`;
      correctAnswer = numberOne + numberTwo;
    } else if (operation === '*') {
      question = `${numberOne} * ${numberTwo}`;
      correctAnswer = numberOne * numberTwo;
    } else if (operation === '-') {
      question = `${numberOne} - ${numberTwo}`;
      correctAnswer = numberOne - numberTwo;
    }
    console.log('Question: ', question);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${welcome.getName()}!`);
      break;
    }
  }
  if (countCorrectAnswers === numberOfAttempts) {
    console.log(`Congratulations, ${welcome.getName()}!`);
  }
};

export const braingcd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  let countCorrectAnswers = 0;

  while (countCorrectAnswers < numberOfAttempts) {
    const numberOne = getRandomNumber(100);
    const numberTwo = getRandomNumber(100);

    const nod = (x, y) => {
      // eslint-disable-next-line no-param-reassign
      while (y !== 0) y = x % (x = y);
      return x;
    };

    // eslint-disable-next-line no-unused-vars
    const correctAnswer = nod(numberOne, numberTwo);

    console.log(`Question: ${numberOne} ${numberTwo}`);

    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${welcome.getName()}!`);
      break;
    }
  }
  if (countCorrectAnswers === numberOfAttempts) {
    console.log(`Congratulations, ${welcome.getName()}!`);
  }
};

export const brainProgression = () => {
  console.log('What number is missing in the progression?');

  let countCorrectAnswers = 0;
  const progressionLength = 10;

  while (countCorrectAnswers < numberOfAttempts) {
    let elementProgression = getRandomNumber(10);
    const step = getRandomNumber(10);
    const answerIndex = getRandomNumber(10);

    const progressions = [];

    for (let i = 0; i < progressionLength; i += 1) {
      progressions.push(elementProgression);
      elementProgression += step;
    }

    // eslint-disable-next-line no-unused-vars
    const correctAnswer = progressions[answerIndex];
    progressions[answerIndex] = '..';

    console.log(`Question: ${progressions.join(' ')}`);

    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${welcome.getName()}!`);
      break;
    }
  }
  if (countCorrectAnswers === numberOfAttempts) {
    console.log(`Congratulations, ${welcome.getName()}!`);
  }
};
