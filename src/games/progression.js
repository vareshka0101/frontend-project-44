import randomNumber from '../randomNum.js';
import runGame from '../index.js';

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i + = 1) {
    progression.push(start + i * step);
  }
  return progression;
};
const getRound = () => {
  const minProgrLength = 5;
  const maxProgrLength = 10;
  const progressionLength = randomNumber(maxProgrLength - minProgrLength + 1) +  minProgrLength;
  const start = randomNumber(30) + 1;
  const step = randomNumber(10) + 1;
  const progression = generateProgression(progressionLength, start, step);

  const hiddenElementIndex = randomNumber(progression.length);
  const correctAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer: correctAnswer.toString() };
};

const playerQuest = 'What number is missing in the progression?';
const progressionGame = () => {
  runGame(playerQuest, getRound);
};

export default progressionGame;
