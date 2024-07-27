const { Console } = require("console-mpds");

const console = new Console();
const msg = console.readString("Hay triple eco!!! Escribe algo:");
console.writeln(
`${msg}, ${msg}, ${msg}!!!
${msg}, ${msg}!!!
${msg}!!!
`);
