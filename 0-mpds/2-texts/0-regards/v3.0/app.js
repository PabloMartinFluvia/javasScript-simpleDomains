const { Console } = require("console-mpds");

const console = new Console();
console.writeln(`Hola, ${console.readString("Como te llamas?")}!!! :-)`);
