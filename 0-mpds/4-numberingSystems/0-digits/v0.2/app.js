const { Console } = require("console-mpds");

const console = new Console();
let number = console.readNumber(`Dame un número entero: `);
const DIGITS = ["Unidades", "Decenas", "Centenas"];
let rightDigit;
for (let i = 0; i < DIGITS.length; i++) {
  rightDigit = number % 10;
  console.writeln(`${DIGITS[i]}: ${rightDigit}`);
  number -= rightDigit;
  number /= 10;
}
