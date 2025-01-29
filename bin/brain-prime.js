import {getRandom} from "../src/random.js";
import basicOfGames from "../index.js";

const brainPrimeQuestion='Answer "yes" if given number is prime. Otherwise answer "no".';
const brainPrimeGame=()=>{
    const randomNum = getRandom(100);
    const isPrime =(num)=>{
        if(num <2){
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const result=isPrime(randomNum)?'yes':'no';
    return[randomNum,result];
}
basicOfGames(brainPrimeQuestion,brainPrimeGame);
