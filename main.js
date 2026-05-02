const readline = require("readline-sync");

const userInput = readline.question("Hello, please name a fruit ");//ask for a string
const idxNumber = readline.questionInt("Choose an index number zero - nine "); // ask for a number not to big

const charString = userInput[idxNumber]; // access the string character based on the user input
console.log("Your character is: " + charString);