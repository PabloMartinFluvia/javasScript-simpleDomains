const { Console } = require("console-mpds");

const console = new Console();
let input = console.readString("Introduce 3 palabras separadas por varios espacios: ");

// 1) Trovar index que apunta al primer caracter de la primera paraula
let iBeginFirstWord = 0;
while (input[iBeginFirstWord] === ` `)  //el input pot NO començar en espais -> while
  iBeginFirstWord++;
// 2) Trovar index que apunta al últim caràcter de la primera paraula (si o si després hi haurà un espai en blanc)
let iEndFirstWord = iBeginFirstWord + 1; 
while (input[iEndFirstWord] !== ` `) //pot ser que amb la inicialització ja apunti al primer espai posterior
  iEndFirstWord++;
iEndFirstWord--; //per a tornar a tenir l'index apuntant al últim caracter de la primera paraula
//3)Tenir el missatge amb la primera paraula
let msg = ``;
for (let i = iBeginFirstWord; i <= iEndFirstWord; i++) 
  msg += input[i];

//4) Trovar index que apunta al primer caracter de la segona paraula
let iBeginSecondWord = iEndFirstWord + 1; //apunta al primer espai després de la primera paraula SI o SI
/* com que iBeginSecondWord apunta al primer espai després de la primera paraula SI o SI ->
-> si o si haurà de saltar almenys 1 posició -> do-while */
do
    iBeginSecondWord++;
while  (input[iBeginSecondWord] === ` `);
// 5) Trovar index que apunta al últim caràcter de la primera paraula (si o si després hi haurà un espai en blanc)
let iEndSecondtWord = iBeginSecondWord + 1;
while (input[iEndSecondtWord] !== ` `) //pot ser que amb la inicialització ja apunti al primer espai posterior
  iEndSecondtWord++;
iEndSecondtWord--;
// 6) Acumular en el missatge un espai i la segona paraula
msg += ` `;
for (let i = iBeginSecondWord; i <= iEndSecondtWord; i++) 
  msg += input[i];

// 7) Trovar index que apunta al primer caracter de la tercera paraula
let iBeginThirdWord = iEndSecondtWord + 1;//apunta al primer espai després de la segona paraula SI o SI
/* com que iBeginThirdWord apunta al primer espai després de la primera paraula SI o SI ->
-> si o si haurà de saltar almenys 1 posició -> do-while */
do
iBeginThirdWord++;
while (input[iBeginThirdWord] === ` `);
// 8) Trovar index del final de la tercera paraula (potser després NO hi ha espai en blanc)
let iEndThirdWord = iBeginThirdWord + 1;
while (input[iEndThirdWord] !== ` ` && iEndThirdWord < input.length) {
  iEndThirdWord++;
}
//index pot haver arrivat al primer espai despres de la tercera paraula o pot apuntar a una posició fora del String
iEndThirdWord--;
// 9) Acumular en el missatge un espai i la tercera paraula
msg += ` `;
for (let i = iBeginThirdWord; i <= iEndThirdWord; i++) 
  msg += input[i];
console.writeln(`.${msg}.`)




