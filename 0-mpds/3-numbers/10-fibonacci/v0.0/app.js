const { Console } = require("console-mpds");

const console = new Console();
let position = console.readNumber("Dame una posición: ");
let fibonacci = 1; //inicialización en 1
if (position > 2) { //ya que la secuencia es: 1, 1, .... 2, 3, 5, 8 ,13, 21
  //my code:
  let previous = fibonacci;
  let aux;
  for (let i = 3; i <= position; i++) {
    aux = previous;
    previous = fibonacci;
    fibonacci += aux;
  }
  /*
  //Luís code:
  let previousPrevious = 1;
  let previous = 1;
  for (let i = 3; i <= position; i++) {
    fibonacci = previous + previousPrevious;
    previousPrevious = previous;
    previous = fibonacci;
  }
  */
}
console.writeln(`El término de la serie de Fibonacci de ${position} es ${fibonacci}`);
