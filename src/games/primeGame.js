import {getRandom} from "../random.js";

export const primeGame=()=>{
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
