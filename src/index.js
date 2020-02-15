import readlineSync from 'readline-sync';

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function isEven(number) {
  return number % 2 === 0;
}

const welcome = {
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

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let countCorrectAnswers = 0;

  while (countCorrectAnswers < 3) {
    const number = getRandomNumber();

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
  if (countCorrectAnswers === 3) {
    console.log(`Congratulations, ${welcome.getName()}!`);
  }
};

export { welcome, brainEven };
