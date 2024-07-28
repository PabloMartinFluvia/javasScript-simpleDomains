const { Console } = require("console-mpds");

const ABCISSA_MSG = "Dame la abcisa de la coordenada:";
const ORDINATE_MSG = "Dame la ordenada de la coordenada:"
const MAX_SHIFT = 2;
const MIN_SHIFT = 1;

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

const isHorseMovement = absHorizontalShift === MAX_SHIFT   &&   absVerticalShift === MIN_SHIFT
                        ||      
                        absHorizontalShift === MIN_SHIFT   &&   absVerticalShift === MAX_SHIFT;

console.writeln(`
La coordenada origen (${abcissaOrigin}, ${ordinateOrigin}) y la coordenada destino \
(${abcissaTarget}, ${ordinateTarget}) ${isHorseMovement ? "si" : "no"} es un movimiento del caballo`);