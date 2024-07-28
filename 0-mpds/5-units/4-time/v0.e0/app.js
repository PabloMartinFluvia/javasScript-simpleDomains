const { Console } = require("console-mpds");

const SECONS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = SECONS_PER_MINUTE;
const HOURS_MSG = "Dame las horas:";
const MINUTES_MSG = "Dame los minutos:";
const SECONDS_MSG = "Dame los segundos:";

const console = new Console();
console.writeln("Primera duración:");
let hours = console.readNumber(HOURS_MSG);
let minutes = console.readNumber(MINUTES_MSG);
let seconds = console.readNumber(SECONDS_MSG);
console.writeln(`
Segunda duración:`);
hours += console.readNumber(HOURS_MSG);
minutes += console.readNumber(MINUTES_MSG);
seconds += console.readNumber(SECONDS_MSG);

const secondsRemainder = seconds % SECONS_PER_MINUTE;

minutes += (seconds - secondsRemainder) / SECONS_PER_MINUTE;
const minutesRemainder = minutes % MINUTES_PER_HOUR;

hours += (minutes - minutesRemainder) / MINUTES_PER_HOUR;

console.writeln(`
La suma es ${hours}:${minutesRemainder}:${secondsRemainder}`);
