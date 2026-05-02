const readline = require("readline-sync");

const userInput = readline.question("Hello, please name a fruit ");
const idxNumber = readline.questionInt("Choose an index number zero - nine ");

const charString = userInput[idxNumber];
console.log("Your character is: " + charString);