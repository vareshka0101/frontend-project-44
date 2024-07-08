import randomNumber from './randomNum.js';
import runGame from './index.js';
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const question = randomNum;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const isPrimeGame = () => {
const playerQuest =('Answer "yes" if given number is prime. Otherwise answer "no".');
  runGame(playerQuest, generateQuestionAndAnswer);
};

export default isPrimeGame;


