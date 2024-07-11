import randomNumber from '../randomNum.js';
import runGame from '../index.js';

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};
const generateQuestionAndAnswer = () => {
  const minProgressionLength = 5;
  const maxProgressionLength = 10;
  const progressionLength = randomNumber(maxProgressionLength - minProgressionLength + 1) + minProgressionLength;

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
  runGame(playerQuest, generateQuestionAndAnswer);
};


export default progressionGame;
