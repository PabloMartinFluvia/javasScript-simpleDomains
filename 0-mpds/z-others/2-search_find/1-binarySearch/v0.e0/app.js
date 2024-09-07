const { Console } = require("console-mpds");

let values = [0, undefined, 1000000];
const MIDDLE_INDEX = 1;
const consoleMPDS = new Console();
let responseIndex;
do {
    values[MIDDLE_INDEX] = ( (values[MIDDLE_INDEX + 1] + values[MIDDLE_INDEX - 1]) 
                           - (values[MIDDLE_INDEX + 1] + values[MIDDLE_INDEX - 1]) % 2 ) / 2 ;
    let isValidInput;
    do {
        const response = consoleMPDS.readString(`¿Es igual, menor, o mayor que ${values[MIDDLE_INDEX]}?: `);        
        const RESPONSES = ['mayor', 'igual', 'menor'];
        responseIndex = 0;
        while (response !== RESPONSES[responseIndex] && responseIndex < RESPONSES.length) {
            responseIndex++;            
        }
        isValidInput = response === RESPONSES[responseIndex];
        if (!isValidInput) {
            consoleMPDS.writeln("Error: respuesta debe ser 'igual', 'menor' o 'mayor'!");
        }
    } while (!isValidInput);

    values[responseIndex] = values[MIDDLE_INDEX] + 1 - responseIndex;
} while (responseIndex !== MIDDLE_INDEX);
consoleMPDS.writeln(`El número es ${values[MIDDLE_INDEX]}`);

/*
// Línia 9 equivalente a:
values[MIDDLE_INDEX] = (values[MIDDLE_INDEX + 1] + values[MIDDLE_INDEX - 1]) / 2; 
    //como el resultado puede ser un valor real x.yy ->
values[MIDDLE_INDEX] -= values[MIDDLE_INDEX] % 1;
//  a / b quiero división entera -> (a - a % b) / b
*/