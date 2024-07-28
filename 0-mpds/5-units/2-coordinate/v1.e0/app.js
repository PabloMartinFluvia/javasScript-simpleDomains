const { Console } = require("console-mpds");

const console = new Console();
const abcissa = console.readNumber("Dame la abcisa de la coordenada:");
const ordinate = console.readNumber("Dame la ordenada de la coordenada:");
/*precondiciones: no se acepta coordenadas en los ejes, debido a que en los 
requisitos no se ha indicado que mensaje se debe dar
*/
let quadrant = abcissa > 0   &&   ordinate > 0   ? "1" : "";
quadrant += abcissa < 0   &&   ordinate > 0   ? "2" : "";
quadrant += abcissa < 0   &&   ordinate < 0   ? "3" : "";
quadrant += abcissa > 0   &&   ordinate < 0   ? "4" : "";
console.writeln(`
La coordenada (${abcissa}, ${ordinate}) \
${quadrant !== "" ? `está en el ${quadrant}º` : `no está en ningún`} cuadrante`);

