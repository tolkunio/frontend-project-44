import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const generateProgression = (start, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};
const getGameData = () => {
  const length = getRandomNumber(5, 10);
  const first = getRandomNumber(1, 10);
  const step = 2;
  const progression = generateProgression(first, length, step);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const removedNumber = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  const result = String(removedNumber);
  return [question, result];
};

const progression = () => {
  const rule = 'What number is missing in the progression?';
  runEngine(rule, getGameData);
};

export default progression;
