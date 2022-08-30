const readlineSync = require('readline-sync');

function startGame() {
    console.log(`M A S T E R M I N D`);

    const DIGITS = 4;
    let turns = 0;
    let won = false;
    let correctAns = [];
    for (let i = 0; i < DIGITS; i++) {
        let tempDigit = Math.ceil(Math.random() * 5);
        correctAns.push(tempDigit);
    }
    let currInput = readlineSync.question(`${turns + 1}) Guess the 4-digit code: `);
    while (turns < 10 && currInput.toLowerCase() !== "quit") {
        currInput = currInput.split('');
        let correctPos = 0;
        let incorrectPos = 0;
        for (let i = 0; i < currInput.length; i++) {
            let tempInp = Number(currInput[i]);
            if (tempInp === correctAns[i]) {
                correctPos++;
            }
            else if (correctAns.includes(tempInp)) {
                incorrectPos++;
            }
        }
        let result = { correctPos, incorrectPos };
        if (correctPos === DIGITS) {
            won = true;
            console.log("Correct - You win!");
            break;
        } else {
            console.log(`${correctPos} matching digit(s) in the Correct position`);
            console.log(`${incorrectPos} matching digit(s) in the IN-Correct position`);
        }
        turns++;
        if (turns < 10) {
            currInput = readlineSync.question(`${turns + 1}) Guess the 4-digit code: `);
        } else {
            break;
        }
    }
    if (won) {
        console.log("Correct - You win!");
    }
    else {
        console.log(`You lose. Code was ${correctAns}`);
    }
    return;
}

startGame();