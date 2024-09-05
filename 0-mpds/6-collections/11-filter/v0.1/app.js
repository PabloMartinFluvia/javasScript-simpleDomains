const { Console } = require("console-mpds");

const console = new Console();
const values = [3, 6, 8, 2, 7, 9, 5, 2, 4, 6];

function filter(values, condition) {
  let acu = [];
  for (let value of values) {
    if (condition(value)){
      acu[acu.length] = value;
    }
  }
  return acu;
}

function isEven(value) {
  return value % 2 === 0;
}

function isOdd(value) {
  return value % 2 !== 0;
}

// permet evitar duplicar el codi i fer que la funció 'filter' canvï dinamicament
console.writeln(filter(values, isEven));
console.writeln(filter(values, isOdd));
