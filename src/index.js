import readlineSync from 'readline-sync';

const runEngine = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const attemptsCount = 3;

  for (let i = 0; i < attemptsCount; i += 1) {
    console.log(description);
    const [question, result] = generateRound();
    console.log(`Question: ${question}`);

    const userAnswer = (readlineSync.question('Your answer: '));

    if (userAnswer !== result) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default runEngine;
