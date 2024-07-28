const { Console } = require("console-mpds");

const console = new Console();
const age = console.readNumber("Qué años tienes? ");
const AGE_MAJORITY = 18;
const isAdult = age >= AGE_MAJORITY;
console.writeln(`${isAdult? `Sí` : `No`} eres mayor de edad`);

// amb una constant per evitar números mágics i millorar llegibilitat