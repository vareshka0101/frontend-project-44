import randomNumber from './randomNum.js';
import runGame from './index.js';

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

  const generateQuestionAndAnswer = () => {
    const num1 = randomNumber(50) + 1;
    const num2 = randomNumber(50) + 1;
    const operation = randomOperation();
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = calculate(num1, operation, num2).toString();
    return { question, correctAnswer };
  };
  
  
  const calcGame = () => {
    runGame(generateQuestionAndAnswer);
  };
  
  export default calcGame;
 
<<<<<<< HEAD

=======
>>>>>>> 1437cb7f43a6524926823fee8bd820bcb809baa3
