const { Console } = require("console-mpds");

let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];



//el error es que los límites de las condiciones de los 'for' están al revés
const consoleMPDS = new Console();
consoleMPDS.writeln(`Matriz original: ${matrix}`);
consoleMPDS.writeln(`Matriz original: ${transpose(matrix)}`);
//console.log(matrix); // for test
//console.log(transpose(matrix)); // for test

function transpose(matrix) {
  let transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    transposed[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
}

/*
// con esta inicialización el programa se rompería sin la corrección
let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];
*/


/*
// con esta inicialización no funcionaría sin la corrección, ultima fila de la traspuesta sería todo undefined
let matrix = [
  [1, 2, 3, 4],
  [6, 7, 8, 9],
  [11, 12, 13, 14],
  [16, 17, 18, 19],
  [21, 22, 23, 24],
];
*/