const { Console } = require("console-mpds");

const console = new Console();
const day = console.readNumber(`Escriba un día (1-30): `);
const month = console.readNumber(`Escriba un mes (1-12): `);
const year = console.readNumber(`Escriba un año (1-...): `);

const DAYS_PER_MONTH = 30;
const MONTHS_PER_YEAR = 12;
const DAYS_PER_YEAR = DAYS_PER_MONTH * MONTHS_PER_YEAR; // 360
const MONTHS_PER_SEASON = 3;
const DAYS_PER_SEASON = DAYS_PER_MONTH * MONTHS_PER_SEASON; // 90
/*
Let's work with a new calendar:
days range: 0-29
months range: 0-11
Seasons ranges:
    Spring  0-0 (0) to 29-2 (89)
    Summer 0-3 (90) to 29-5 (179)
    Autum 0-6 (180) to 29-7 (269)
    Winter 0-9 (270) to 29-11 (359)

dayShifted = dayCount - 81;
*/
const FIRST_MONTH_IN_SHIFTED_CALENDAR = 3;
const FIRST_DAY_IN_SHIFTED_CALENDAR = 21;
const SHIFT = DAYS_PER_MONTH * (FIRST_MONTH_IN_SHIFTED_CALENDAR - 1) + FIRST_DAY_IN_SHIFTED_CALENDAR ; //81
const dayCount = DAYS_PER_MONTH * (month - 1) + day; 
let dayShifted = dayCount - SHIFT;
if(dayShifted < 0){
    dayShifted = (dayShifted + DAYS_PER_YEAR) % DAYS_PER_YEAR;
}

const completedDaysInActualSeason = dayShifted % DAYS_PER_SEASON; // 0 : 89
const periodIndex = (completedDaysInActualSeason - completedDaysInActualSeason % DAYS_PER_MONTH) / DAYS_PER_MONTH; //  0 1 2
const seasonIndex = (dayShifted - completedDaysInActualSeason) / DAYS_PER_SEASON; // 0 1 2 3 

const PERIODS = ['primeros', 'mediados', 'finales'];
const SEASONS = ['primavera', 'verano', 'otoño', 'invierno'];
console.writeln(`El día ${day} del ${month} de ${year} \
cae a ${PERIODS[periodIndex]} de ${SEASONS[seasonIndex]}.`);