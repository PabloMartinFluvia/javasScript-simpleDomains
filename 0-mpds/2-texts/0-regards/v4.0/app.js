const { Console } = require("console-mpds");

const console = new Console();
let name = console.readString("Como te llamas?");
console.writeln(`Hola, ${name}!!! :-)`);
console.writeln(`Adios, ${name}!!! :-)`);
