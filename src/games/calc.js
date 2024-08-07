import randomNumber from '../randomNum.js';
import runGame from '../index.js';

const randomOperation = () => {
  const operations = ['+', '-', '*'];
  const index = randomNumber(operations.length);
  return operations[index];
};

const calculate = (num1, operation, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

const getRound = () => {
  const num1 = randomNumber(30) + 1;
  const num2 = randomNumber(30) + 1;
  const operation = randomOperation();
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculate(num1, operation, num2).toString();
  return { question, correctAnswer };
};

const playerQuest = 'What is the result of the expression?';
const calcGame = () => {
  runGame(playerQuest, getRound);
};

export default calcGame;
