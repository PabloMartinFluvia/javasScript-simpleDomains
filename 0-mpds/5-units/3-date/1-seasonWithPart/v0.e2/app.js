const { Console } = require("console-mpds");

const DAYS_PER_MONTH = 30;
const MONTHS_PER_YEAR = 12;
const DAYS_PER_YEAR = DAYS_PER_MONTH * MONTHS_PER_YEAR; // 360
const MONTHS_PER_SEASON = 3;
const DAYS_PER_SEASON = DAYS_PER_MONTH * MONTHS_PER_SEASON; // 90

const console = new Console();
const day = console.readNumber(`Escriba un día (1-30): `);
const month = console.readNumber(`Escriba un mes (1-12): `);
const year = console.readNumber(`Escriba un año (1-...): `);

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

const FIRST_MONT_IN_SHIFTED_CALENDAR = 3;
const FIRST_DAY_IN_SHIFTED_CALENDAR = 21;
const DAYS_TO_SHIFT = DAYS_PER_MONTH * (FIRST_MONT_IN_SHIFTED_CALENDAR-1) + FIRST_DAY_IN_SHIFTED_CALENDAR ; //81
const dayCount = DAYS_PER_MONTH * (month-1) + day; 
let dayCountShifted = dayCount - DAYS_TO_SHIFT;
dayCountShifted = (dayCountShifted + DAYS_PER_YEAR) % DAYS_PER_YEAR;
//console.writeln(dayCountShifted);//for test

const dayInSeason = dayCountShifted % DAYS_PER_SEASON; // 0 : 89
let periodIndex = dayInSeason / DAYS_PER_MONTH; //  0.x : 2.x
periodIndex -=  periodIndex % 1; // 0 1 2
let range;
switch(periodIndex){
    case 1:
        range ="mediados";
        break;
    case 2:
        range = "finales";
        break;
    default:
        range = "primeros";

}
//console.writeln(monthInSeason);//for test    
//console.writeln(range);//for test

const seasonIndex = (dayCountShifted - dayInSeason)/DAYS_PER_SEASON; // 0 1 2 3 
let season;
switch(seasonIndex){
    case 1:
        season ="verano";
        break;
    case 2:
        season = "otoño";
        break;
    case 3:
        season = "invierno";
        break;
    default:
        season = "primavera";
}

console.writeln(`El día ${day} del ${month} de ${year} cae a ${range} de ${season}.`);