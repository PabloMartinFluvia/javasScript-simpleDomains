const { Console } = require("console-mpds");

const console = new Console();
const number = console.readNumber("Dame un número: ");
let times = 0;
do { //no quiero asegurame que al menos se ejecuta una vez
  times++;
  console.writeln(`${number} * ${times} = ${number * times}`);
} while (times < 10); //no es un número indeterminado de veces 