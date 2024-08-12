const { Console } = require("console-mpds");

const console = new Console();
const sentence = console.readString("Dime algo: ");
console.writeln(`La frase "${sentence}"
se traduce a "${toMorse(sentence)}"`);

function toMorse(sentence) {
    const LETTERS = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"
        , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const MORSE = ["/ ", ".- ", "-... ", "-.-. ", "-.. ", ". ", "..-. ", "--. ", ".... "
        , ".. ", ".--- ", "-.- ", ".-.. ", "-- ", "-. ", "--- ", ".--. ", "--.- ", ".-. "
        , "... ", "- ", "..- ", "...- ", ".-- ", "-..- ", "-.-- ", "--.. "];
    let message = "";
    for (let i = 0; i < LETTERS.length; i++) { // recorre LETTERS, en vez de sentence
        let char = sentence[i];
        if ('A' <= char && char <= 'Z') {
            //char -= 'A' - 'a'; // (L) not working
            //console.writeln('A' - 'a'); // NaN // for test
            char = sentence[i].toLowerCase(); // (ME)                        
        } else if (char < 'a' || 'z' < char) {
            char = ' ';
        }
        let found = false;
        for (let j = 0; !found && j < MORSE.length; j++) { // (ME) condición de stop
            if (char == LETTERS[j]) {
                message += MORSE[j];
                found = true;
            }
        }
    }
    return message;
}
