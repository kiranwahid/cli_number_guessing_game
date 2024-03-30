#! /usr/bin/env node
import inquirer from "inquirer";
// ========== Generate randome number ============
const randomNumber = Math.floor(Math.random() * 10 + 1);
//  ============Taking input from user through inquirer ===========
const userinput = await inquirer.prompt([
    {
        message: "Please guess a secrect number between 1 to 10.",
        type: "number",
        name: "guessedNumber",
    },
]);
// ============== conditional Statment ==============
console.log(`Guessed No is ${userinput.guessedNumber} Correct Answer is ${randomNumber}`);
if (userinput.guessedNumber === randomNumber) {
    console.log(`congratulation! you guessed a correct number`);
}
else {
    console.log(`ops! try again please`);
}
