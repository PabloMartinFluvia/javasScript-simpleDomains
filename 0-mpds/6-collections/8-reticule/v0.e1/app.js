const { Console } = require("console-mpds");

const consoleMPDS = new Console();
let rows;
let ok;
const ERROR_MSG = 'Error: debe ser un valor positivo';
do {
    rows = consoleMPDS.readNumber("Escribe el número de filas (positivo): ");
    ok = rows > 0;
    if (!ok) {
        consoleMPDS.writeln(ERROR_MSG);
    }
} while (!ok);

let columns;
do {
    columns = consoleMPDS.readNumber("Escribe el número de columnas (positivo): ");
    ok = columns > 0;
    if (!ok) {
        consoleMPDS.writeln(ERROR_MSG);
    }
} while (!ok);


/*
Ejercicio resuelto considerando que las filas i columnas proporcionadas
corresponden al número de quadrados a pintar.
Filas = 2
Columnas = 1
-> Resultado:

    * * * * *
    * · · · *
    * · · · * 
    * · · · *
    * * * * * 
    * · · · *
    * · · · * 
    * · · · *
    * * * * * 
*/
const SQUARE_SIZE = 5;
const STEPS = SQUARE_SIZE - 1;
let reticule = [];
for (let i = 0; i <= rows * STEPS; i++) {
    reticule[i] = [];
    for (let j = 0; j <= columns * STEPS; j++) {        
        const INSIDE = '·';
        reticule[i][j] = INSIDE;
        const BORDER = '*';
        if (i % STEPS === 0 || j % STEPS === 0) {
            reticule[i][j] = BORDER;
        }
    }
}

for (let row of reticule) {
    for (let element of row) {
        consoleMPDS.write(`${element} `);
    }
    consoleMPDS.writeln();
}