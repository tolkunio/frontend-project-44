import {getRandom} from "../random.js";
import basicOfGames from "../../index.js";

const getGameData = () => {
    const randomNumber1 = getRandom(100);
    const randomNumber2 = getRandom(10);
    const signs = ['+', '-', '*'];
    const randomSigns = signs[getRandom(2)];
    const question = `${randomNumber1}${randomSigns}${randomNumber2}`;
    let res = 0;
    switch (randomSigns) {
        case '+':
            res = randomNumber1 + randomNumber2;
            break;
        case '-':
            res = randomNumber1 - randomNumber2;
            break;
        case '*':
            res = randomNumber1 * randomNumber2;
            break;
        default:
            console.log('couldnt find signs')
    }
    return [question, res.toString()];
};

const calcGame = () => {
    const rule = 'What is the result of the expression?';
    basicOfGames(rule, getGameData);
}
export default calcGame;
