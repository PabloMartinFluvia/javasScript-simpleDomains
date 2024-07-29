const { Console } = require("console-mpds");

const console = new Console();
const input = console.readNumber(`Dame un número positivo: `);
//hay que encontrar los N primeros primos y sumarlos (donde N = amount)
let sum = 0;
let numEvaluated = 1;
let primesFound = 0;
do {
  let isPrime = false;
  if (numEvaluated >= 2) {
    let divisor = 2;
    while (numEvaluated % divisor !== 0) {
      divisor++;
    }
    isPrime = numEvaluated === divisor;
  }
  if (isPrime) {
    sum += numEvaluated;
    primesFound++;
  }
  numEvaluated++;
} while (primesFound < input);
console.writeln(`La suma de los primeros ${input} primos es ${sum}`);
