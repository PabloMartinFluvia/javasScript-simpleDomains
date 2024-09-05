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

// permet evitar que declarar N funcions nominals (i que poden ser dificils de posar un nom al identificador)
console.writeln(findFirst(values, function (value) {
  return value % 2 === 0;
}));
console.writeln(findFirst(values, function (value) {
  return value % 2 !== 0;
}));
