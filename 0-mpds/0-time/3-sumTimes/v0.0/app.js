const { Console } = require("console-mpds");

const console = new Console();
//Solución asumiendo que la hora final sigue en el mismo día
const hour = console.readNumber("Dime la hora actual [0-23]: ");
const minute = console.readNumber("Dime los minutos actuales [0-59]: ");
const neededHours = console.readNumber("Dime cuantas horas necesitas [0-23]: ");
const neededMinutes = console.readNumber("Dime los minutos necesitas [0-59]: ");
let afterHours = hour + neededHours;
let afterMinutes = minute + neededMinutes;
const MINUTES_PER_HOUR = 60;
if (afterMinutes >= MINUTES_PER_HOUR){
  afterMinutes -= MINUTES_PER_HOUR;
  afterHours++;
}
console.writeln(`Serán las ${afterHours}:${afterMinutes}`);
