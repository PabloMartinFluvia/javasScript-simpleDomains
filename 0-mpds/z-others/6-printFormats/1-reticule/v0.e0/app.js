const { Console } = require("console-mpds");

const consoleMPDS = new Console();
let rows;
let ok;
const ERROR_MSG = 'Error: debe ser un valor positivo';
do {
    rows = consoleMPDS.readNumber("Escribe el número de filas (positivo): ");
    ok = rows > 0;
    if(!ok){
        consoleMPDS.writeln(ERROR_MSG);
    }
}while(!ok);

let columns;
do {
    columns = consoleMPDS.readNumber("Escribe el número de columnas (positivo): ");
    ok = columns > 0;
    if(!ok){
        consoleMPDS.writeln(ERROR_MSG);
    }
}while(!ok); 

/*
Ejercicio resuelto considerando que las filas i columnas proporcionadas
corresponden a las dimensiones de la retícula
*/
let reticule = [];
for (let i = 0; i < rows; i++) {
    reticule[i] = [];
    for (let j = 0; j < columns; j++) {              
        const INSIDE = '·';
        reticule[i][j] = INSIDE;
        const SQUARE_SIZE = 5;  
        const BORDER = '*';
        if(i % (SQUARE_SIZE - 1) === 0 || j % (SQUARE_SIZE - 1) === 0){
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