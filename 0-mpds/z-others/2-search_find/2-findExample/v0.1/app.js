const { Console } = require("console-mpds");

const console = new Console();
const values = [3, 6, 8, 2, 7, 9, 5, 2, 4, 6];

function findFirst(values, condition) {
  for (let value of values) {
    if (condition(value)){
      return value;
    }
  }
  return undefined;
}

function isEven(value) {
  return value % 2 === 0;
}

function isOdd(value) {
  return value % 2 !== 0;
}
// permet evitar duplicar el codi i fer que la funció 'findFirst' canvï dinamicament
console.writeln(findFirst(values, isEven));
console.writeln(findFirst(values, isOdd));
