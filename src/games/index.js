import readlineSync from 'readline-sync';

const welcome = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
};

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ').toLowerCase();
  return answer;
};


const checkAnswer = (userAnswer, correctAnswer, name) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
};


const runGame = (playerQuest, generateQuestionAndAnswer) => {
  const name = welcome();
  console.log(playerQuest);
  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    const { question, correctAnswer } = generateQuestionAndAnswer();
    const userAnswer = askQuestion(question);
    const isCorrect = checkAnswer(userAnswer, correctAnswer, name);
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;

