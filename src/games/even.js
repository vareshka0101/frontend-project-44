import randomNumber from '../randomNum.js';
import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const oneRound = () => {
  const number = randomNumber(100);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playerQuest = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  runGame(playerQuest, oneRound);
};

export default evenGame;
