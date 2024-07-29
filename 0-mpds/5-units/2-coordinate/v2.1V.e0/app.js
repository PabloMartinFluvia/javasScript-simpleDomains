const { Console } = require("console-mpds");

const ABCISSA_MSG = "Dame la abcisa de la coordenada:";
const ORDINATE_MSG = "Dame la ordenada de la coordenada:"

const console = new Console();
console.writeln("Coordenada origen:")
const abcissaOrigin = console.readNumber(ABCISSA_MSG);
const ordinateOrigin = console.readNumber(ORDINATE_MSG);
console.writeln("Coordenada destino:")
const abcissaTarget = console.readNumber(ABCISSA_MSG);
const ordinateTarget = console.readNumber(ORDINATE_MSG);
const isVerticalMove = ordinateTarget !== ordinateOrigin   &&   abcissaTarget === abcissaOrigin;
console.writeln(`
La coordenada origen (${abcissaOrigin}, ${ordinateOrigin}) y la coordenada destino \
(${abcissaTarget}, ${ordinateTarget}) ${isVerticalMove ? "si" : "no"} es un movimiento vertical`);