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
lets work with a calendar that starts on March 21th:
Examples :
March 21th -> dayCount is 81 (30+30+21) -> dayCountShifted (in new calendar) is 1
March 20th -> dayCount is 80 (30+30+20) -> dayCountShifted (in new calendar) is 360 (30*12)
*/
const FIRST_MONT_IN_SHIFTED_CALENDAR = 3;
const FIRST_DAY_IN_SHIFTED_CALENDAR = 21;
const DAYS_TO_SHIFT = DAYS_PER_MONTH * (FIRST_MONT_IN_SHIFTED_CALENDAR-1) + FIRST_DAY_IN_SHIFTED_CALENDAR ; //81

const dayCount = DAYS_PER_MONTH * (month-1) + day; 
let dayCountShifted = dayCount - DAYS_TO_SHIFT + 1;
if(dayCountShifted < 1){
    dayCountShifted += DAYS_PER_YEAR;
}
//console.writeln(dayCountShifted);//for test

//1-90 season 1  ; 91 - 180 season 2 ; 181 - 270 season 3 ; 271 - 360 season 4
let season = 'primavera';
if(dayCountShifted > DAYS_PER_SEASON * 3){
    season = 'invierno';
}else if (dayCountShifted > DAYS_PER_SEASON * 2){
    season = 'otoño';
}else if (dayCountShifted > DAYS_PER_SEASON){
    season = 'verano';
}

//console.writeln(season);//for test

//1 -  30   91 - 120    181 - 210   271 - 300   primeros range 1
//31 - 60   121 - 150   211 - 240   301 - 330   mediados  range 2
//61  - 90  151 - 180   241  - 270   331 - 360   finales   range 3
const dayCountInSeason = dayCountShifted % DAYS_PER_SEASON;  //range 1...89,0
const isLastDayInSeason = dayCountInSeason === 0;
let range = "primeros";
if(dayCountInSeason > DAYS_PER_MONTH * 2  ||  isLastDayInSeason){
    range = "finales";
}else if (dayCountInSeason > DAYS_PER_MONTH){
    range = "mediados";
}    
//console.writeln(range);//for test

console.writeln(`El día ${day} del ${month} de ${year} cae a ${range} de ${season}.`);
