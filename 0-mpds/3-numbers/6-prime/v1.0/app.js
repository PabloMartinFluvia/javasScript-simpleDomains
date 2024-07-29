const { Console } = require("console-mpds");

const console = new Console();
const input = console.readNumber(`Dame un número positivo: `);
//hay que encontrar los primos que hay hasta N, y luego sumarlos (N = amount)
let sum = 0;
for(let numEvaluated=1; numEvaluated<=input; numEvaluated++){
  //mismo algoritmo que en v0.1, para ver si 'i' es primo
  //precondición: asume que 1 no es un número primo -> si amount és 1 -> result 0
  let isPrime = false;
  if (numEvaluated >= 2) {
    let divisor = 2;
    while (numEvaluated % divisor !== 0) {
      divisor++;
    }
    isPrime = numEvaluated === divisor;
  }

  if (isPrime){
    sum += numEvaluated;
  }
}
console.writeln(`La suma de los primos en los primeros ${input} números es ${sum}`);
