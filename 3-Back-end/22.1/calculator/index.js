const readline = require('readline-sync');

console.log("Simple Calculator");

const num1 = readline.questionInt('Type a number :');
const oper = readline.question('Type an operator (+, -, *, /): ');
const num2 = readline.questionInt('Type a number :');

const operations = {
  "+": function sum(num1, num2) {return num1 + num2},
  "-": function sub(num1, num2) {return num1 - num2},
  "*": function mult(num1, num2) {return num1 * num2},
  "/": function div(num1, num2) {return num1 / num2},
};

console.log(`${num1} ${oper} ${num2} = ${operations[oper](num1, num2)}`);
