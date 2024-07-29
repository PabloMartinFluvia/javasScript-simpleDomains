const { Console } = require("console-mpds");

const console = new Console();
const number = console.readNumber("Dame un número: ");
let times = 0; //para que inicializado con 0, si no estoy contando ni indexando (es un valor que se incrementara)
while (times < 10) { //no es un numero indeterminado de veces
  times++;
  console.writeln(`${number} * ${times} = ${number * times}`);
}