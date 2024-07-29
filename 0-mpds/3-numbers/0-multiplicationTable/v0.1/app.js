const { Console } = require("console-mpds");

const console = new Console();
const number = console.readNumber("Dame un número: ");
let times = 1;
while (times <= 10) { //no es un numero indeterminado de veces
  console.writeln(`${number} * ${times} = ${number * times}`);
  times++;
}
