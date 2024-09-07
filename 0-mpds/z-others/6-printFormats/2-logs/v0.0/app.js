const { Console } = require("console-mpds");

const console = new Console();
function log(date, importance, message) {
    console.writeln(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}
log(new Date(), "DEBUG", "parametro no válido");
log(new Date(), "DEBUG", "formato incorrecto");
log(new Date(), "WARNING", "valor undefined");
log(new Date(), "WARNING", "cuidadito");
console.writeln();

