import {getRandom} from "../random.js";

export const gcdGame = () => {
    let randomNumber1 = getRandom(100);
    let randomNumber2 = getRandom(10);
    const question = `${randomNumber1} ${randomNumber2}`;
    const gcdTwoNumbers = (num1, num2) => {
        if (num1 % num2 === 0) {
            return num2;
        }
        return gcdTwoNumbers(num2, num1 % num2);
    };
    const result = gcdTwoNumbers(randomNumber1, randomNumber2).toString();
    return [question, result];
};
