const { Console } = require("console-mpds");

const consoleMPDS = new Console();


let isStop;
const STOP_NUMBER = 0;
let numbers = [];
let isOrdered = true;
let previous = STOP_NUMBER;
do {   
    let number; 
    let isInvalid;
    do {
        number = consoleMPDS.readNumber("Escribe un número positivo (0 para terminar): ");
        isInvalid = number < STOP_NUMBER;
        if (isInvalid) {
            consoleMPDS.writeln('Error: el número debe ser positivo!');
        }
    } while (isInvalid);

    isStop = number === STOP_NUMBER
    if (!isStop) {
        numbers[numbers.length] = number;
        if (isOrdered) {
            isOrdered = number > previous;
            previous = number;
        }
    }
} while (!isStop);
consoleMPDS.writeln(`La serie ${numbers} ${isOrdered ? 'si' : 'no'} está ordenada.`);