import runGame from '../index.js';
import randomNumber from '../randomNum.js';

const calculateGcd = (a, b) => (! b ? a : calculateGcd (b, a % b));
const getRound = () => {
  const num1 = randomNumber(30) + 1;
  const num2 = randomNumber(30) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = calculateGcd(num1, num2).toString();
  return { question, correctAnswer };
};
const playerQuest = 'Find the greatest common divisor of given numbers.';
const gcdGame = () => {
    runGame(playerQuest, getRound);
};
export default gcdGame;
