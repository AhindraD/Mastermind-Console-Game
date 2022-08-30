const readlineSync = require('readline-sync');
const colors = require('colors');

function startGame() {
    console.log("M A S T E R M I N D".bold.bgBrightCyan);
    console.log('\n');

    const DIGITS = 4;
    let turns = 0;
    let won = false;
    let correctAns = [2, 4, 2, 4];
    // for (let i = 0; i < DIGITS; i++) {
    //     let tempDigit = Math.ceil(Math.random() * 5);
    //     correctAns.push(tempDigit);
    // }
    let currInput = readlineSync.question(`${turns + 1}) Guess the 4-digit code: `.blue);
    while (turns < 10 && currInput.toLowerCase() !== "quit") {
        currInput = currInput.split('');
        let correctPos = 0;
        let incorrectPos = 0;
        let copy = correctAns.slice();

        //LOGIC PART
        for (let i = 0; i < currInput.length; i++) {
            let tempInp = Number(currInput[i]);
            if (tempInp === copy[i]) {
                correctPos++;
                copy[i] = 'done';
            }
        }
        for (let i = 0; i < currInput.length; i++) {
            let tempInp = Number(currInput[i]);
            if (copy.includes(tempInp)) { incorrectPos++; }
        }

        let result = { correctPos, incorrectPos };
        if (correctPos === DIGITS) {
            won = true;
            //console.log("Correct - You win!");
            break;
        } else {
            console.log(`${correctPos} matching digit(s) in the Correct position`.green);
            console.log(`${incorrectPos} matching digit(s) in the IN-Correct position`.green);
            console.log(`${9 - turns} chances remaining!`.green);
            console.log('\n');
        }
        turns++;
        if (turns < 10) {
            currInput = readlineSync.question(`${turns + 1}) Guess the 4-digit code: `.blue);
        } else {
            break;
        }
    }
    if (won) {
        console.log("Correct - You win!".bold.bgBrightCyan);
    }
    else {
        console.log(`You lose. Code was ${correctAns.join('')}`.bold.bgYellow);
    }
    return;
}

startGame();