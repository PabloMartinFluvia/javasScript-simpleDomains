const { Console } = require("console-mpds");

const console = new Console();
const min = console.readNumber(`Introduce el mínimo del intervalo:`);
const max = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo):`);
const shift = console.readNumber(`Introduce un factor de desplazamiento:`);
console.writeln(`
El intervalo [${min}, ${max}] con un factor de desplazamiento ${shift} \
es el intervalo [${min + shift}, ${max + shift}]`);