const { Console } = require("console-mpds");

const console = new Console();
const MIN_MSG = "Introduce el mínimo del intervalo:";
const MAX_MSG = "Introduce el máximo del intervalo (superior o igual al mínimo):";
/*
Precondición: se supone que existe intersección entre los 2 intervalos 
(la unión resultante es un solo intervalo que SOLO incluye todos los elementos de los 2 intervalos)
*/
console.writeln(`Primer intervalo`)
const min1 = console.readNumber(MIN_MSG);
const max1 = console.readNumber(MAX_MSG);
console.writeln(`Segundo intervalo`)
const min2 = console.readNumber(MIN_MSG);
const max2 = console.readNumber(MAX_MSG);
console.writeln(`
El intervalo [${min1}, ${max1}] unión con el intervalo [${min2}, ${max2}] \
es el intervalo [${min1 <= min2 ? min1 : min2}, ${max1 >= max2 ? max1 : max2}]`);