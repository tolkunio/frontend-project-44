import getRandomNumber from '../utils.js';
import startBrainGames from '../index.js';

const generateProgression = (start, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i);
  }
  return progression;
};
const getGameData = () => {
  const length = getRandomNumber(5, 10);
  const first = Math.floor(Math.random() * 10) + 2;

  const progression = generateProgression(first, length);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const removedNumber = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  const result = String(removedNumber);
  return [question, result];
};

const progression = () => {
  const rule = 'What number is missing in the progression?';
  startBrainGames(rule, getGameData);
};

export default progression;
