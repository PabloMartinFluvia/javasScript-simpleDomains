const { Console } = require("console-mpds");

const console = new Console();
const number1 = console.readNumber("Dame un número: ");
//numeros amigos: la suma de sus divisores es igual
let sum1 = 0;
for (let divisor = 1; divisor < number1; divisor++) {
  if (number1 % divisor == 0) {
    sum1 += divisor;
  }
}
const number2 = console.readNumber("Dame otro número: ");
let sum2 = 0;
for (let divisor = 1; divisor < number2; divisor++) {
  if (number2 % divisor == 0) {
    sum2 += divisor;
  }
}
console.writeln(`Los números ${number1} y ${number2} \
${number1 === sum2 && number2 === sum1 ? `si` : `no`} son amigos`);
