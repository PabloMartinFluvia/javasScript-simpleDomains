/*
Nota: console.readNumber parseja el input a int -> factors decimals (com el 0.5 ) els arrodoneix a enters
*/
const { Console } = require("console-mpds");

const console = new Console();
const min = console.readNumber(`Introduce el mínimo del intervalo:`);
const max = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo):`);
const factor = console.readNumber(`Introduce un factor de escala positivo:`);
const center = (max + min) / 2;
const halfNewLength = factor * (max - min) / 2;
console.writeln(`
El intervalo [${min}, ${max}] con un factor de escala ${factor} \
es el intervalo [${center - halfNewLength}, ${center + halfNewLength}]`);