import readlineSync from 'readline-sync';

const greetPlayer = () => {
  console.log("Welcome to the Brain Games!");
  const playerName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const runGame = (gameDescription, getRound) => {
  const username = greetPlayer();
  console.log(gameDescription);

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = getRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`'${userAnswer}' is the wrong answer ;(. The correct answer was '${correctAnswer}'. Let's try again, ${username}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};

export default runGame;
