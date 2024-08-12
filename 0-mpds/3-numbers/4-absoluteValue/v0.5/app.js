const { Console } = require("console-mpds");

const console = new Console();
const number = console.readNumber("Escribe un número? ");
console.writeln(`El valor absoluto del número ${number} es ${getAbsolute(number)}`);

function getAbsolute(number) {
  if (number >= 0) {
    return number;
  }
  return -1 * number;
}
