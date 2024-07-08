# Brain-games
### Hexlet tests and linter status:
[![Actions Status](https://github.com/vareshka0101/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/vareshka0101/frontend-project-44/actions)


[![asciicast](https://asciinema.org/a/odURCygkQoTuCBld6QoGagQmP.svg)](https://asciinema.org/a/odURCygkQoTuCBld6QoGagQmP)

[![asciicast](https://asciinema.org/a/Fgcc29HDXwUVgeagNNkcHUd5e.svg)](https://asciinema.org/a/Fgcc29HDXwUVgeagNNkcHUd5e)
=======
### CodeClimate maintainability status:
[![Maintainability](https://api.codeclimate.com/v1/badges/cec6733fff1e4b93425c/maintainability)](https://codeclimate.com/github/vareshka0101/frontend-project-44/maintainability)

## Игра: "Проверка на чётность"
Необходимо реализовать игру "Проверка на чётность". Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное:

Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: yes
В случае, если пользователь даст неверный ответ, необходимо завершить игру и вывести сообщение:
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Bill!
В случае, если пользователь ввел верный ответ, нужно отобразить:
Correct!
и приступить к следующему числу.
Пользователь должен дать правильный ответ на три вопроса подряд. После успешной игры нужно вывести:
Congratulations, Bill!
Вывод должен получиться следующий:

brain-even
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!
Любой некорректный ввод считается ошибкой (например, n) и равносилен неправильному ответу.

[![asciicast](https://asciinema.org/a/5KcHWzNmL1gQ0uTXGpYFKBLCs.svg)](https://asciinema.org/a/5KcHWzNmL1gQ0uTXGpYFKBLCs)

## Игра: "Калькулятор"
Необходимо реализовать игру "Калькулятор". Суть игры в следующем: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.
Вывод должен получиться следующий:
brain-calc
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
Достаточно реализовать следующие операции: +, - и *.
Операции, как и числа, выбираются случайным образом.
В случае, если пользователь даст неверный ответ, необходимо вывести:
Question: 25 * 7
Your answer: 145
'145' is wrong answer ;(. Correct answer was '175'.
Let's try again, Sam!
и завершить игру.

[![asciicast](https://asciinema.org/a/N4AEk3uT989Z3wBX1iHAPnfFm.svg)](https://asciinema.org/a/N4AEk3uT989Z3wBX1iHAPnfFm)

## Игра: "НОД"
Необходимо реализовать игру "наибольший общий делитель (НОД)". Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

Вывод должен получиться следующий:
brain-gcd
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!

В случае, если пользователь даст неверный ответ, необходимо вывести:

Question: 25 50
Your answer: 1
'1' is wrong answer ;(. Correct answer was '25'.
Let's try again, Sam!

[![asciicast](https://asciinema.org/a/1EffDGlV8ShaiwP61DQAOLw3V.svg)](https://asciinema.org/a/1EffDGlV8ShaiwP61DQAOLw3V)
>>>>>>> 1437cb7f43a6524926823fee8bd820bcb809baa3

