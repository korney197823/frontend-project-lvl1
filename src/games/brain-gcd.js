import readlineSync from "readline-sync";
import {welcome} from "../index";

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