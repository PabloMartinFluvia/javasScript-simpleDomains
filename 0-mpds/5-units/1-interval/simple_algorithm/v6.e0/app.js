const { Console } = require("console-mpds");

const console = new Console();
const MIN_MSG = "Dame el mínimo:";
const MAX_MSG = "Dame el máximo:";
const min1 = console.readNumber(MIN_MSG);
const max1 = console.readNumber(MAX_MSG);
const min2 = console.readNumber(MIN_MSG);
const max2 = console.readNumber(MAX_MSG);
console.writeln(`
${max1 < min2   ||   max2 < min1   ? "No" : "Sí"} existe intersección entre \
los intervalos [${min1}, ${max1}] y [${min2}, ${max2}]`);