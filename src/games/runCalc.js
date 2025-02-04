import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};
const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const result = calculate(randomOperator, number1, number2);
  return [question, result.toString()];
};

const runCalc = () => {
  const rule = 'What is the result of the expression?';
  runEngine(rule, getGameData);
};
export default runCalc;
