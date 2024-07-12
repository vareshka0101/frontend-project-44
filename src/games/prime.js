import randomNumber from '../randomNum.js';
import runGame from '../index.js';
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

const oneRound = () => {
  const question = randomNumber(50)+1;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
const playerQuest ='Answer "yes" if given number is prime. Otherwise answer "no".';
const primeGame = () => {
  runGame(playerQuest, oneRound);
};

export default primeGame;





