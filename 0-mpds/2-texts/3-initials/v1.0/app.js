const { Console } = require("console-mpds");

const console = new Console();
const AMOUNT = 3;
let input = console.readString("Introduce 3 palabras separadas por varios espacios: ");
let msg = ``;
let iBeginWord = 0;
for (let j = 0; j < AMOUNT; j++) {
  while (input[iBeginWord] === ` `) {
    iBeginWord++;
  }
  let iEndWord = iBeginWord + 1;
  while (input[iEndWord] !== ` ` && iEndWord < input.length) {
    iEndWord++;
  }
  iEndWord--;
  for (let i = iBeginWord; i <= iEndWord; i++) {
    msg += input[i];
  }
  //if (i !== AMOUNT) { //error en (L)
  if (j < AMOUNT - 1) { //Corrección: si aún NO estamos en la ultima iteración
    msg += ` `;
  }
  iBeginWord = iEndWord + 1;
}
console.writeln(`.${msg}.`)




