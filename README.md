# Brain-games
Игры на развитие логики и скорости мышления.
#### Hexlet tests and linter status:
[![Actions Status](https://github.com/vareshka0101/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/vareshka0101/frontend-project-44/actions)

#### CodeClimate maintainability status:
[![Maintainability](https://api.codeclimate.com/v1/badges/cec6733fff1e4b93425c/maintainability)](https://codeclimate.com/github/vareshka0101/frontend-project-44/maintainability)

## Установка игр:

- Клонировать репозиторий проекта. Инструкция по клонированию: https://docs.github.com/ru/repositories/creating-and-managing-repositories/cloning-a-repository
- Ввести в терминале `make insall`

## Игра: "Проверка на чётность"
Условия игры: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное:
В терминале вводим brain-even и отвечаем правильно на вопросы.
В случае успешного прохождения игры - поздравления от всей души. Вы молодец!

Пример успешного прохождения смотрите ниже:
 
[![asciicast](https://asciinema.org/a/oePEUYQgI4nEByBOW6uOAJGv5.svg)](https://asciinema.org/a/oePEUYQgI4nEByBOW6uOAJGv5)

## Игра: "Калькулятор"

Условия игры: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

Вывод должен получиться следующий:
```
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
```
- Достаточно реализовать следующие операции: +, - и *.
- Операции, как и числа, выбираются случайным образом.
В случае, если пользователь даст неверный ответ, необходимо вывести:
```
Question: 25 * 7
Your answer: 145
'145' is wrong answer ;(. Correct answer was '175'.
Let's try again, Sam!
```
и завершить игру.

Пользователь должен дать правильный ответ на три вопроса подряд. После успешной игры нужно вывести:
```
Congratulations, Sam!
```
[![asciicast](https://asciinema.org/a/T7EqnX5LaIazDIFXe8FYRrKdL.svg)](https://asciinema.org/a/T7EqnX5LaIazDIFXe8FYRrKdL)

## Игра: "НОД"

Условия игры: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

Вывод должен получиться следующий:

```
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
```

В случае, если пользователь даст неверный ответ, необходимо вывести:
```
Question: 25 50
Your answer: 1
'1' is wrong answer ;(. Correct answer was '25'.
Let's try again, Sam!
```
[![asciicast](https://asciinema.org/a/Xs5nG42A1QBqbHvP1Mwyv1AJ9.svg)](https://asciinema.org/a/Xs5nG42A1QBqbHvP1Mwyv1AJ9)

## Игра: "Арифметическая прогрессия"

Условия игры: представлен ряд чисел, образующих арифметическую прогрессию. Одно из чисел заменено на две точки. Игрок должен определить это число.

Пример:

```
brain-progression

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
```

В случае, если пользователь даст неверный ответ, необходимо вывести:
```
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 1
'1' is wrong answer ;(. Correct answer was '15'.
Let's try again, Sam!
```
[![asciicast](https://asciinema.org/a/GzhOPBszcMs8XyFhNnMcKqOSq.svg)](https://asciinema.org/a/GzhOPBszcMs8XyFhNnMcKqOSq)

## Игра: "Простое ли число?"

Пример:
```
brain-prime

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
```
Условие игры: опеделить, является ли число простым или нет. Ввести соответствующий ответ.

[![asciicast](https://asciinema.org/a/WJxqMxBbRc1tqIFFBWtsI6BaC.svg)](https://asciinema.org/a/WJxqMxBbRc1tqIFFBWtsI6BaC)
