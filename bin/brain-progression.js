import {getRandomRange} from "../src/random.js";
import basicOfGames from "../index.js";

const brainProgressionQuestion='What number is missing in the progression?';

const progressionGame=()=>{
    const random=getRandomRange(5,10);
    const first=Math.floor(Math.random()*10)+2;
    if (first >= random) {
        return ['Invalid progression', ''];
    }
    const progression=[];
    for(let i=first; i<random; i++){
        progression.push(i);
    }
    const lastIndex=progression.length-1;
    const randomFromArr=getRandomRange(0,lastIndex);
    const removedNumber=progression[randomFromArr];
    progression[randomFromArr]='..';
    const question=progression.join(' ');
    const result=removedNumber.toString();
    return[question,result];
}
basicOfGames(brainProgressionQuestion,progressionGame);
