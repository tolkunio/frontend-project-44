export const evenGame = () => {
    const randomNumber = Math.floor(Math.random() * 50);
    const isEven = (number) => number % 2 === 0;
    const result = isEven(randomNumber) ? 'yes' : 'no';
    return [randomNumber, result];
};
