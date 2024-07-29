const { Console } = require("console-mpds");

const console = new Console();
const number = console.readNumber("Escribe un número? ");
let parity;
if (number % 2 === 0) //{
  parity = "par";
/*}*/ else //{
  parity = "impar";
//}
console.writeln(`El numero ${number} es ${parity}`); //evitar codico duplicado

// se evita código duplicado, pero no se aprovecha la inizialización de la variable 
