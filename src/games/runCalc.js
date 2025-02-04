import startBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const calculateResult = (operator, randomNumber1, randomNumber2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
  return result;
};
const getGameData = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const result = calculateResult(randomOperator, randomNumber1, randomNumber2);
  return [question, result.toString()];
};

const calc = () => {
  const rule = 'What is the result of the expression?';
  startBrainGames(rule, getGameData);
};
export default calc;
