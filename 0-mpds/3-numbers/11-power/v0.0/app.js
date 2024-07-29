const { Console } = require("console-mpds");

const console = new Console();
const base = console.readNumber("Dame una base: ");
let exponent = console.readNumber("Dame un exponente: ");
let isNegativeExponent = exponent < 0;
if (isNegativeExponent) {
  exponent *= -1;
}
let powered = 1;
for (let i = 1; i <= exponent; i++) {
  powered *= base;
}
if (isNegativeExponent){
  powered = 1/powered;
  exponent *= -1;
}
console.writeln(`La base ${base} elevada al exponente ${exponent} es ${powered}`);
