import {getRandom, getRandomRange} from "../utils.js";
import basicOfGames from "../index.js";

const getGameData =()=> {
    const length=getRandomRange(5,10);
    const first=Math.floor(Math.random()*10)+2;

    const progression=[];
    for(let i=first; i<first+length; i+=1){
        progression.push(i);
    }
    const lastIndex=progression.length-1;
    const randomFromArr=getRandomRange(0,lastIndex);
    const removedNumber=progression[randomFromArr];
    progression[randomFromArr]='..';
    const question=progression.join(' ');
    const result=String(removedNumber);
    return[question,result];
}

const progressionGame =()=> {
    const rule='What number is missing in the progression?';
    basicOfGames(rule,getGameData);
}

export default progressionGame;
