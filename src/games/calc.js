
import startBrainGames from '../index.js';
import getRandomNumber from "../utils.js";

const getGameData = () => {
  const randomNumber1 = getRandomNumber(1,100);
  const randomNumber2 = getRandomNumber(1,10);
  const signs = ['+', '-', '*'];
  const randomSigns = signs[getRandomNumber(1,2)];
  const question = `${randomNumber1} ${randomSigns} ${randomNumber2}`;
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
      console.log('couldnt find signs');
  }
  return [question, res.toString()];
};

const calcGame = () => {
  const rule = 'What is the result of the expression?';
  startBrainGames(rule, getGameData);
};
export default calcGame;
