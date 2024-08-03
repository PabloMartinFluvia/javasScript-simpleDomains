const { Console } = require("console-mpds");

// funciona con n x n y con n x m

let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];


/*
let matrix = [
    [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];
*/

/*
let matrix = [
  [1, 2, 3, 4],
  [6, 7, 8, 9],
  [11, 12, 13, 14],
  [16, 17, 18, 19],
  [21, 22, 23, 24],
];
*/


// 1) La traspuesta tiene tantas filas como columnas tenga la original
let transposed = [];
for (let i = 0; i < matrix[0].length; i++) {
    transposed[i] = [];
    // 2) La traspuesta tiene tantas columnas como filas tenga la original
    for (let j = 0; j < matrix.length; j++) {
        transposed[i][j] = matrix[j][i];
    }
}

const consoleMPDS = new Console();

consoleMPDS.writeln(`Matriz original: ${matrix}`);
consoleMPDS.writeln(`Matriz traspuesta: ${transposed}`);
// para mejor visualización por consola:
//console.log(matrix); 
//console.log(transposed); 