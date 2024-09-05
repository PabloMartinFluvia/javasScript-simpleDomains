const { Console } = require("console-mpds");

const console = new Console();
const values = [3, 6, 8, 2, 7, 9, 5, 2, 4, 6];

function sum(values, operation) {
  let acu = 0;
  for (let value of values) {
    acu += operation(value);
  }
  return acu;
}

// permet facilitar la llegibilitat
console.writeln(sum(values, value => value * 2));
console.writeln(sum(values, value => value * 3));

