const { Console } = require("console-mpds");

const console = new Console();
const values = [3, 6, 8, 2, 7, 9, 5, 2, 4, 6];

function filterEvens(values) {
  let acu = [];
  for (let value of values) {
    if (value % 2 === 0){
      acu[acu.length] = value;
    }
  }
  return acu;
}
console.writeln(filterEvens(values));

function filterOdds(values) {
  let acu = [];
  for (let value of values) {
    if (value % 2 !== 0){
      acu[acu.length] = value;
    }
  }
  return acu;
}
console.writeln(filterOdds(values));
