import readlineSync from "readline-sync";
import {welcome} from "../index";

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