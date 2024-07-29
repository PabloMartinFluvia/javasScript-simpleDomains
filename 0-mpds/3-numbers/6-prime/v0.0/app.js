const { Console } = require("console-mpds");

const console = new Console();
let numEvaluated = console.readNumber(`Dame un número positivo (mayor que 1): `);
//precondición: los números primos són > 1
let isPrime = false;
if (numEvaluated >= 2) {
  let divisor = 2;
  while (numEvaluated % divisor !== 0) { //bucle seguro que termina cuando, next === number, ya que number % number === 0
    divisor++;
  }
  //si el bucle se termina antes que next alcanze a number -> se ha encontrado un divisor >= 2 y < que el mismo
  isPrime = numEvaluated === divisor;
}
console.writeln(`El número ${numEvaluated} ${isPrime ? `si` : `no`} es primo`);
