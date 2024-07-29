const { Console } = require("console-mpds");

const console = new Console();
const number = console.readNumber("Escribe un número? ");
if (number % 2 === 0) //{
  console.writeln(`El numero ${number} es par`);
/*}*/ else //{
  console.writeln(`El numero ${number} es impar`);
//}

//hay código duplicado
