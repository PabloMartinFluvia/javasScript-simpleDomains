const { Console } = require("console-mpds");

const console = new Console();
const min = console.readNumber(`Introduce el mínimo del intervalo:`);
const max = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo):`);
const point = console.readNumber(`Introduce un punto:`);
console.writeln(`
El intervalo [${min}, ${max}] ${min <= point   &&   point <= max   ? "si" : "no"} incluye el punto ${point}`);