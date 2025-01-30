import { getRandom } from '../utils.js';
import basicOfGames from '../index.js';

const getGameData = () => {
  const randomNum = getRandom(100);
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const result = isPrime(randomNum) ? 'yes' : 'no';
  return [randomNum, result];
};

const primeGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  basicOfGames(rule, getGameData);
};

export default primeGame;
