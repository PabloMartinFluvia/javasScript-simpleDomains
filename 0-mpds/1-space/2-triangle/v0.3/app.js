const { Console } = require("console-mpds");

const console = new Console();
const NUM_SIDES = 3;
const sides = [];
for (let i = 0; i < NUM_SIDES; i++) {
  sides[i] = console.readNumber(`Dame el ${i+1}º lado del triangulo: `);
}

let msg = `Los lados `;
for (let i = 0; i < NUM_SIDES; i++) {
  msg += `${sides[i]}${[`, `, ` y `, ` `][i]}`;
}
let greater = sides[0];
let sum = sides[0];
for (let i = 1; i < NUM_SIDES; i++) {
  sum += sides[i];
  if (sides[i] > greater) {
    greater = sides[i];
  }
}
const isTriangle = greater < sum - greater;
if (!isTriangle) {
  msg += `NO `;
}
msg += `forman un triangulo `;
if (isTriangle){
  msg += `de tipo `;
  let pairs = 0;
  for (let i = 0; i < NUM_SIDES; i++) {
    for (let j = i + 1; j < NUM_SIDES; j++) {
      if (sides[i] == sides[j]) {
        pairs++;
      }
    }
  }
  msg += [`escaleno`, `isosceles`, ``, `equilatero`][pairs];
}
console.writeln(msg);
