const { Console } = require("console-mpds");

const console = new Console();
const input = console.readNumber(`Dame un número en binario: `);
let binary = input;
let decimal = 0;
let power = 1;
//conversión és bit * 2^potencia {bit * 2^2 + bit * 2^1 + bit * 2^0}
//haciendo que 'power' sea el equivalente a 2^x en cada iteración ->
// first bit con 1, second bit con 2, third bit con 4, fourth bit con 8 ....
do {
  let bit = binary % 10; //cojer el primer bit
  decimal += bit * power;
  binary = (binary - bit) / 10;
  power = power * 2; //actualización del 2^x para la siguiente iteración
} while (binary > 0);
console.writeln(`El número ${input} binario corresponde con el número ${decimal} decimal`);
