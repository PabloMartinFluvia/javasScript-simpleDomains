const { Console } = require("console-mpds");

const MAX_DAY = 30;
const MAX_MONTH = 12;
const MIN = 1;

const console = new Console();
const day = console.readNumber("Dame el día:");
const month = console.readNumber("Dame el mes:");
const year = console.readNumber("Dame el año:");
//precondiciones: dias i meses són > 0
const monthChanges = day === MIN;
const yearChanges = monthChanges &&   month === MIN;

const prevDay = !monthChanges ? day - 1 : MAX_DAY;
const prevMonth = !monthChanges ? month : (!yearChanges ? month - 1 : MAX_MONTH);
const prevYear = !yearChanges ? year : year - 1;

console.writeln(`
La fecha ${day}/${month}/${year} y la previa es ${prevDay}/${prevMonth}/${prevYear}`);