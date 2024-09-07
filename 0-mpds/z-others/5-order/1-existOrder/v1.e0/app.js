const { Console } = require("console-mpds");

const consoleMPDS = new Console();

let numbers = [];
let isValidSecuence;
do {
    let number = consoleMPDS.readNumber("Escribe un número positivo (0 para terminar): ");
    if(number > 0){
        numbers[numbers.length] = number;
    } else if (number < 0){
        consoleMPDS.writeln('Error: el número debe ser positivo!');
    }
    isValidSecuence = number === 0 && numbers.length >= 2;
    if(!isValidSecuence && number === 0){
        consoleMPDS.writeln('Error: la secuencia debe tener al menos 2 números!')
    }
} while (!isValidSecuence);

let index = 0;
while (numbers[index] < numbers[index + 1] && index + 1 < numbers.length) {
    index++;
}
let msg = `La serie ${numbers}`;
if (index + 1 < numbers.length) {
    msg += ' no';
}
msg +=` está ordenada ascendentemente.`;
consoleMPDS.writeln(msg);