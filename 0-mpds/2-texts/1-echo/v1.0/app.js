//sentencia const
const { Console } = require("./console");

const console = new Console();
const msg = console.readString("Hay triple eco!!! Escribe algo:");
console.writeln(
`${msg}, ${msg}, ${msg}!!!
${msg}, ${msg}!!!
${msg}!!!
`);
