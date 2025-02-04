import startBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const gcdTwoNumbers = (num1, num2) => {
  if (num2 > 0) {
    return gcdTwoNumbers(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const getGameData = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 10);
  const question = `${randomNumber1} ${randomNumber2}`;
  const result = gcdTwoNumbers(randomNumber1, randomNumber2).toString();
  return [question, result];
};

const gcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  startBrainGames(rule, getGameData);
};

export default gcd;
