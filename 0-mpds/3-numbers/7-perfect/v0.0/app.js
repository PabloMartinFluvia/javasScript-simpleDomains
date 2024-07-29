const { Console } = require("console-mpds");

const console = new Console();
const number = console.readNumber(`Dame un número positivo: `);
let sum = 0;
for(let divisor=1; divisor < number; divisor++){
  if (number % divisor === 0){
    sum += divisor;
  }
}
console.writeln(`El número ${number} ${sum === number ? `si` : `no`} es perfecto`);
