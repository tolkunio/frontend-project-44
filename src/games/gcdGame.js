import { getRandom } from '../utils.js';
import basicOfGames from '../index.js';

const getGameData = () => {
  const randomNumber1 = getRandom(30);
  const randomNumber2 = getRandom(10);
  const question = `${randomNumber1} ${randomNumber2}`;
  const gcdTwoNumbers = (num1, num2) => {
    if (num2 > 0) {
      return gcdTwoNumbers(num2, num1 % num2);
    }
    return Math.abs(num1);
  };
  const result = gcdTwoNumbers(randomNumber1, randomNumber2).toString();
  return [question, result];
};

const gcdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  basicOfGames(rule, getGameData);
};

export default gcdGame;
