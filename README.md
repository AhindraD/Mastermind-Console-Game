# Mastermind
Mastermind is a code-breaking game where the aim is to guess a randonm 4-digit code where each code digit is in the range 1-5. 

For each guess the user is told: 
* How many digits in the guess are correct in both value and position. 
* How many digits in the guess have the correct value but are in the wrong position

The player loses if the player cannot guess the code within 10 attempts.

More details are avaible on [wikipedia](https://en.wikipedia.org/wiki/Mastermind_(board_game)), and you can [play the game here](https://www.webgamesonline.com/mastermind/).

Here is the output of a round:
```
M A S T E R M I N D
1) Guess the 4-digit code: 4422
  2 matching digit(s) in the correct position
  0 matching digit(s) in the incorrect position
2) Guess the 4-digit code: 1223
  0 matching digit(s) in the correct position
  3 matching digit(s) in the incorrect position
3) Guess the 4-digit code: 2241
  0 matching digit(s) in the correct position
  3 matching digit(s) in the incorrect position
4) Guess the 4-digit code: 3124
  1 matching digit(s) in the correct position
  3 matching digit(s) in the incorrect position
5) Guess the 4-digit code: 4213
  1 matching digit(s) in the correct position
  3 matching digit(s) in the incorrect position
6) Guess the 4-digit code: 3124
  1 matching digit(s) in the correct position
  3 matching digit(s) in the incorrect position
7) Guess the 4-digit code: 3421
  0 matching digit(s) in the correct position
  4 matching digit(s) in the incorrect position
8) Guess the 4-digit code: 4123
  2 matching digit(s) in the correct position
  2 matching digit(s) in the incorrect position
9) Guess the 4-digit code: 4132
Correct - You win!
```
### Challenge Week 1
Write a `calcScore` function which takes two arrays - the code and the guess - and returns an object which includes (a) the number of correct digits in the correct position; and (b) the number of correct digits in the incorrect position;

eg.
```js
calcScore([4, 4, 1, 2], [4, 1, 5, 2]); // Should return { correctPos: 2, incorrectPos: 1 }
calcScore([4, 4, 1, 2], [5, 5, 5, 5]); // Should return { correctPos: 0, incorrectPos: 0 }
calcScore([4, 4, 1, 2], [4, 4, 1, 2]); // Should return { correctPos: 4, incorrectPos: 0 }
```

### Challenge Week 2
Implment the full game as a console-based application.  Note: If the user enters code of 'quit' or takes more than 10 attempts then show a message saying 'You lose. Code was XXXX' and exit