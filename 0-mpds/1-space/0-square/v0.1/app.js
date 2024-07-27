const { Console } = require("console-mpds");

const console = new Console();
const side = console.readNumber("Dame el lado del cuadrado: ");
const SIDES = 4;
console.writeln(`Perímetro: ${side * SIDES}
Area: ${side ** 2}`);
/*així s'evita 2 declaracions: redueix la complexitat al reduir la quantitat de noms a recordar
i NO disminueix la llegibilitat/comprensió del codi */