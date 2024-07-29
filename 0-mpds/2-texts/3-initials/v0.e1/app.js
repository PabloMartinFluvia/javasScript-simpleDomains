const { Console } = require("console-mpds");

const console = new Console();
let input = console.readString("Introduce 3 palabras separadas por varios espacios: ");

let initIndex = 0;
while(input[initIndex] === ' ')
    initIndex++;
//initIndex apunta al primer caracter de la primera paraula
let firstSpaceIndex = initIndex + 1;
while(input[firstSpaceIndex] !== ' ')
    firstSpaceIndex++;
//firstSpaceIndex apunta al primer espai despres de la primera paraula
let msg = '';
for(let i = initIndex; i <= firstSpaceIndex; i++)
    msg += input[i];
//primera paraula acumulada en el missatge. Ja amb un espai al darrera

initIndex = firstSpaceIndex + 1;
while(input[initIndex] === ' ')
    initIndex++;
//initIndex apunta al primer caracter de la segona paraula
firstSpaceIndex = initIndex + 1;
while(input[firstSpaceIndex] !== ' ')
    firstSpaceIndex++;
//firstSpaceIndex apunta al primer espai despres de la segona paraula
for(let i = initIndex; i <= firstSpaceIndex; i++)
    msg += input[i];
//segona paraula acumulada en el missatge. Ja amb un espai al darrera

initIndex = firstSpaceIndex + 1;
while(input[initIndex] === ' ')
    initIndex++;
//initIndex apunta al primer caracter de la tercera paraula
firstSpaceIndex = initIndex + 1;
while(input[firstSpaceIndex] !== ' '   &&   firstSpaceIndex < input.length)
    firstSpaceIndex++;
//firstSpaceIndex apunta al primer espai despres de la tercera paraula o ja al primer caracter inexistent en el input
for(let i = initIndex; i < firstSpaceIndex; i++)
    msg += input[i];
//segona paraula acumulada en el missatge. Missatge acava en l'ultim caracter de la tercera paraula
console.writeln(`.${msg}.`)