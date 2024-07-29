const { Console } = require("console-mpds");

const console = new Console();
const number = console.readNumber("Escribe un número? ");
let parity = "impar"; //aprovechar la inicialización 
if (number % 2 === 0) //{
  parity = "par";
//} 
console.writeln(`El numero ${number} es ${parity}`);

//no hay codigo duplicado
//se aprovecha la inizialización de la variable para ahorrar la rama else
