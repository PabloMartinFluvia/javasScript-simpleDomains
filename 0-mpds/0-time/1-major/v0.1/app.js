//operador ternari
const { Console } = require("./console");

const console = new Console();
const age = console.readNumber("Qué años tienes? ");
const AGE_MAJORITY = 18;
const isAdult = age >= AGE_MAJORITY;
console.writeln(`${isAdult? `Sí` : `No`} eres mayor de edad`);

/*Aquesta opció encara no es podria fer degut a que encara no s'havia donat les regles
de precedencia i asociativitat: a quin operador pertany l'operando AGE_MAJORITY ???*/
//console.writeln(`${age >= AGE_MAJORITY? 'Si' : 'No'} eres mayor de edad`);