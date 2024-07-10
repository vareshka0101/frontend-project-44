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
  const question = randomNumber(50)+1;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
const primeGame = () => {
const playerQuest =('Answer "yes" if given number is prime. Otherwise answer "no".');
  runGame(playerQuest, generateQuestionAndAnswer);
};

export default primeGame;



