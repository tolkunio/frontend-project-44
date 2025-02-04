import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getGcd = (num1, num2) => {
  if (num2 > 0) {
    return getGcd(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const getGameData = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 10);
  const question = `${randomNumber1} ${randomNumber2}`;
  const result = getGcd(randomNumber1, randomNumber2).toString();
  return [question, result];
};

const runGcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  runEngine(rule, getGameData);
};

export default runGcd;
