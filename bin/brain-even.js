import basicOfGames from "../index.js";

const purposeOfEvenGame = 'Answer "yes" if the number is even , otherwise answer "no."';

const taskForEvenGame = () => {
    const randomNumber = Math.floor(Math.random() * 50);
    const isEven = (number) => number % 2 === 0;
    const result = isEven(randomNumber) ? 'yes' : 'no';
    return [randomNumber, result];
};
basicOfGames(purposeOfEvenGame, taskForEvenGame);

