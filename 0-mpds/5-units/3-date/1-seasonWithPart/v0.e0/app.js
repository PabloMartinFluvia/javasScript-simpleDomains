const { Console } = require("console-mpds");

const console = new Console();
const day = console.readNumber(`Escriba un día (1-30): `);
const month = console.readNumber(`Escriba un mes (1-12): `);
const year = console.readNumber(`Escriba un año (1-...): `);

let season;
let range;
const DAY_SIGNIFICANT = 21;
let msg = `El día ${day} del ${month} de ${year} cae a`;
switch(month){
    case 1:
        season = 'invierno';  
        if(day < DAY_SIGNIFICANT){        
            range = 'principio';
        }else {
            range = 'mediados';
        }
        break;      
    case 2:
        season = 'invierno';
        if(day < DAY_SIGNIFICANT){        
            range = 'mediados';
        }else {
            range = 'finales';
        }
        break;
    case 3:
        if(day < DAY_SIGNIFICANT){
            season = 'invierno';
            range = 'finales';
        }else {
            season = 'primavera';
            range = 'primeros';
        }
        break;
    case 4:
        season = 'primavera';
        if(day < DAY_SIGNIFICANT){        
            range = 'primeros';
        }else {    
            range = 'mediados';
        }
        break;
    case 5:
        season = 'primavera';
        if(day < DAY_SIGNIFICANT){        
            range = 'mediados';
        }else {    
            range = 'finales';
        }
        break;
    case 6:
        if(day < DAY_SIGNIFICANT){
            season = 'primavera';
            range = 'finales';
        }else {
            season = 'verano';
            range = 'primeros';
        }
        break;
    case 7:
        season = 'verano';
        if(day < DAY_SIGNIFICANT){        
            range = 'primeros';
        }else {    
            range = 'mediados';
        }
        break;
    case 8:
        season = 'verano';
        if(day < DAY_SIGNIFICANT){        
            range = 'mediados';
        }else {    
            range = 'finales';
        }
        break;
    case 9:
        if(day < DAY_SIGNIFICANT){
            season = 'verano';
            range = 'finales';
        }else {
            season = 'otoño';
            range = 'primeros';
        }
    case 10:
        season = 'otoño';
        if(day < DAY_SIGNIFICANT){        
            range = 'primeros';
        }else {    
            range = 'mediados';
        }
        break;
    case 11:
        season = 'otoño';
        if(day < DAY_SIGNIFICANT){        
            range = 'mediados';
        }else {    
            range = 'finales';
        }
        break;
    case 12:  
        if(day < DAY_SIGNIFICANT){
            season = 'otoño';
            range = 'finales';
        }else {
            season = 'invierno';
            range = 'primeros';
        }
}
msg += ` ${range} de ${season}.`;
console.writeln(msg);