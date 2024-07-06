# Brain-games
### Hexlet tests and linter status:
[![Actions Status](https://github.com/vareshka0101/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/vareshka0101/frontend-project-44/actions)

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

[![asciicast](https://asciinema.org/a/N4AEk3uT989Z3wBX1iHAPnfFm.svg)](https://asciinema.org/a/N4AEk3uT989Z3wBX1iHAPnfFm)
