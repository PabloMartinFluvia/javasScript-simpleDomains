const { Console } = require("console-mpds");

const MAX_DAY = 30;
const MAX_MONTH = 12;

const console = new Console();
const day = console.readNumber("Dame el día:");
const month = console.readNumber("Dame el mes:");
const year = console.readNumber("Dame el año:");
//precondiciones: dias i meses són > 0
console.writeln(`
La fecha ${day}/${month}/${year} ${day <= MAX_DAY   &&   month <= MAX_MONTH   ? "si" : "no"} es válida`);