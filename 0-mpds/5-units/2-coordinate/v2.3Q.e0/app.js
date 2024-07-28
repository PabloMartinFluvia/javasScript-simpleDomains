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

//Precondiciones: Hay que validar un movimiento -> coordenada destino distinta de coordenada origen
const absHorizontalShift = abcissaTarget >= abcissaOrigin ? 
    abcissaTarget - abcissaOrigin : abcissaOrigin - abcissaTarget;
const absVerticalShift = ordinateTarget >= ordinateOrigin ? 
    ordinateTarget - ordinateOrigin : ordinateOrigin - ordinateTarget;
    
const isQueenMovement = absHorizontalShift === absVerticalShift 
                      ||   absVerticalShift === 0   ||   absHorizontalShift === 0;

console.writeln(`
La coordenada origen (${abcissaOrigin}, ${ordinateOrigin}) y la coordenada destino \
(${abcissaTarget}, ${ordinateTarget}) ${isQueenMovement ? "si" : "no"} es un movimiento de la reina`);