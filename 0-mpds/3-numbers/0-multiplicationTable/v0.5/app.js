const { Console } = require("console-mpds");

const console = new Console();
const number = console.readNumber("Dame un número: ");
writeMultiplyTable(number);

function writeMultiplyTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.writeln(`${number} * ${i} = ${number * i}`);
  }
}
