const { Console } = require("console-mpds");

const console = new Console();
const LETTERS = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"
    , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const MORSE = ["/ ", ".- ", "-... ", "-.-. ", "-.. ", ". ", "..-. ", "--. ", ".... "
    , ".. ", ".--- ", "-.- ", ".-.. ", "-- ", "-. ", "--- ", ".--. ", "--.- ", ".-. "
    , "... ", "- ", "..- ", "...- ", ".-- ", "-..- ", "-.-- ", "--.. "];
const sentence = console.readString("Dime algo: ");
let message = "";
for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if ('A' <= char && char <= 'Z'){ // char es lletra en majuscules
        char = toLowerCase(sentence[i]);
    } else if (char < 'a' || 'z' < char) { // char no es lletra [a-z]
        char = ' ';
    }

    let j = 0;
    while(char !== LETTERS[j]  && j < LETTERS.length){
        j++;
    }
    if (char === LETTERS[j]){
        message += MORSE[j];
    } else {
        console.writeln(`Lógica para asegurar que ${char} sea un carácter está mal implementada`);
    }

    /*
    // Porquè un for? Para que hay que repetir la sentencia secuencial 27 veces?
    // Si lo que se quiere es encontrar el indice del caracter, para así poder indexar el array de morse...
    for (let j = 0; j < MORSE.length; j++) { 
        if (char == LETTERS[j]) {
            message += MORSE[j];
        }
    }
    */
}
console.writeln(`La frase "${sentence}"
se traduce a "${message}"`);
