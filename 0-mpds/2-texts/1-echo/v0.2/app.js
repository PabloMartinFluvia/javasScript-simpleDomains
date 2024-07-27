const { Console } = require("console-mpds");

const console = new Console();
const msg = console.readString("Hay eco!!! Escribe algo:");
console.writeln(`${msg}!!!`);
