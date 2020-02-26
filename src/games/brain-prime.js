import readlineSync from "readline-sync";
import {welcome} from "../index";

export const brainPraim = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    let countCorrectAnswers = 0;
    let correctAnswer = '';

    while (countCorrectAnswers < numberOfAttempts) {
        const number = getRandomNumber(100);

        // eslint-disable-next-line consistent-return
        const isPrime = (num) => {
            for (let i = 2; i < num; i += 1) {
                if (num % i === 0) return false;
                return num > 1;
            }
        };

        if (isPrime(number)) {
            correctAnswer = 'yes';
        } else {
            correctAnswer = 'no';
        }

        console.log('Question: ', number);
        const answer = readlineSync.question('Your answer: ');
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