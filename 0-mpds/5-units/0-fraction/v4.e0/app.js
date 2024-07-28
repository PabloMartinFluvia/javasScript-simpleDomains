const { Console } = require("console-mpds");

const console = new Console();
const NUMERATOR_MSG = "Introduce el numerador de la fracción:";
const DENOMINATOR_MSG = "Introduce el denominador de la fracción:";
console.writeln("Primera fracción:");
const numerator1 = console.readNumber(NUMERATOR_MSG);
const denominator1 = console.readNumber(DENOMINATOR_MSG);
console.writeln("Segunda fracción:");
const numerator2 = console.readNumber(NUMERATOR_MSG);
const denominator2 = console.readNumber(DENOMINATOR_MSG);
console.writeln(`
La multiplicación de la fracción ${numerator1}/${denominator1} y la fracción ${numerator2}/${denominator2} \
es la fracción ${numerator1 * numerator2}/${denominator1 * denominator2}`);