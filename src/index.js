import readlineSync from 'readline-sync';

const basicOfGames=(desc, task)=>{
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(desc);
    for (let i = 0; i < 3; i ++) {
        const [question, result] = task();
        console.log(`Question: ${question}`);
        const userAnswer = (readlineSync.question('Your answer: '));
        const correctAnswer = result;
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};
export default basicOfGames;
