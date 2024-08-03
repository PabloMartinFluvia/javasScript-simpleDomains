const { Console } = require("console-mpds");

/*
Solución de Luís solo funciona con matrices n x n.
Con matrices m x n NO funciona -> ver mi alternativa
*/


let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];


/*
// con esta el programa se rompe
let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];
*/

/*
// con esta solución no funciona, ultima fila de la traspuesta es todo undefined
let matrix = [
  [1, 2, 3, 4],
  [6, 7, 8, 9],
  [11, 12, 13, 14],
  [16, 17, 18, 19],
  [21, 22, 23, 24],
];
*/


//el error es que los límites de las condiciones de los 'for' están al revés

let transposed = [];
for (let i = 0; i < matrix.length; i++) {
  transposed[i] = [];
  for (let j = 0; j < matrix[0].length; j++) {
    transposed[i][j] = matrix[j][i];
  }
}

const consoleMPDS = new Console();
consoleMPDS.writeln(`Matriz original: ${matrix}`);
consoleMPDS.writeln(`Matriz original: ${transposed}`);
console.log(matrix);
console.log(transposed);
