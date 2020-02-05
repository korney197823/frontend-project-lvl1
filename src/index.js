import readlineSync from 'readline-sync'

const welcome = (gameName = '\n') => {
    console.log('Welcome to the Brain Games!');
    console.log(gameName);
    const name = readlineSync.question('May i have your name?: ');
    console.log(`Hello, ${name}`);
};

export { welcome };