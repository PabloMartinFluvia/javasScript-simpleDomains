//operador ternari
const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Escribe un número? ");
//solució de saber la paritat mirant el primer bit:
const firstBit = number & 1;
const parity = firstBit === 0 ? "par" : "impar";
console.writeln(`El numero ${number} es ${parity}`);
