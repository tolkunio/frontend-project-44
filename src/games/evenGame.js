import basicOfGames from "../../index.js";

const getGameData = () => {
    const randomNumber = Math.floor(Math.random() * 50);
    const isEven = (number) => number % 2 === 0;
    const result = isEven(randomNumber) ? 'yes' : 'no';
    return [randomNumber, result];
};

const evenGame =()=>{
    const rule = 'Answer "yes" if the number is even , otherwise answer "no."';
    basicOfGames(rule, getGameData);
};

export default evenGame;
