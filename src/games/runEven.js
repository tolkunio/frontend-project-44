import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const randomNumber = getRandomNumber(1, 50);
  const result = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, result];
};

const runEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rule, getGameData);
};

export default runEven;
