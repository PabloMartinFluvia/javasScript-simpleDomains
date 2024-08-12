const { Console } = require("console-mpds");

const console = new Console();
const sentence = console.readString("Dime algo: ");
console.writeln(`La frase "${sentence}"
se traduce a "${toMorse(sentence)}"`);

function toMorse(sentence) {
    let message = "";
    for (let i = 0; i < sentence.length; i++) { // (ME)
        msg += toMorseChar(sentence[i]);
    }
    return message;

    

    function toMorseChar(char) {
        char = adaptChar(char);
        const LETTERS = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"
            , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const MORSE = ["/ ", ".- ", "-... ", "-.-. ", "-.. ", ". ", "..-. ", "--. ", ".... "
            , ".. ", ".--- ", "-.- ", ".-.. ", "-- ", "-. ", "--- ", ".--. ", "--.- ", ".-. "
            , "... ", "- ", "..- ", "...- ", ".-- ", "-..- ", "-.-- ", "--.. "];
        for (let i = 0;  i < MORSE.length; i++) {  // (ME)
            if (char == LETTERS[i]) {
                return MORSE[i];                
            }
        }
        return MORSE[0]; // for errors, mientras no se pueda hacer diseño por contrato

        function adaptChar(char){
            if ('A' <= char && char <= 'Z') {
                char = sentence[i].toLowerCase(); // (ME)                        
            } else if (char < 'a' || 'z' < char) {
                char = ' ';
            }
            return char;
        }
    }
}
