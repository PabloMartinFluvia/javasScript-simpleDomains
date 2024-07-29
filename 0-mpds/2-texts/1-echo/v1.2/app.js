const { Console } = require("console-mpds");

const console = new Console();
const msg = console.readString("Hay triple eco!!! Escribe algo:");
const PROPAGATION = 3;
let echo = ``;
for (let i = 0; i < PROPAGATION; i++) { // número de 'filas' en función de la propagación
  for (let j = 0; j < PROPAGATION - i; j++) { //número de repeticiones en la 'fila' en funcion de la fila (y la propagación)
    echo += `${msg}`;
    if (j < PROPAGATION - i - 1) { //no es la la ultima iteración del for j
      echo += `, `;
    } else { 
      echo += `!!!\n`;
    }
  }
}
console.writeln(echo);
