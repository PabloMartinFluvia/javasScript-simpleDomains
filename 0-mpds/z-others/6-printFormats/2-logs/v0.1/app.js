const { Console } = require("console-mpds");

const console = new Console();

const logCurry = date => importance => message => 
    console.writeln(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
const logWithDate = logCurry(new Date());

let logWithImporance = logWithDate("DEBUG");
logWithImporance("parámetro no válido");
logWithImporance("formato incorrecto");

logWithImporance = logWithDate("WARNING");
logWithImporance("valor undefined");
logWithImporance("cuidadito");

console.writeln();
