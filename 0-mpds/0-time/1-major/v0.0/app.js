const { Console } = require("console-mpds");

const console = new Console();
const age = console.readNumber("Qué años tienes? ");
console.writeln(`${age >= 18? `Sí` : `No`} eres mayor de edad`); //amb número màgic
