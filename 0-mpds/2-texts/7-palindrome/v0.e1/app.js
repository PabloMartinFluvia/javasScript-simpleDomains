const { Console } = require("console-mpds");

const consoleMPDS = new Console();

const text = consoleMPDS.readString(`Escribe una frase: `);
/*
Problema: método consoleMPDS.readString no lee bien las letras accentuadas (independientemente de si 
són mayúsculas o minúsculas).
//console.log(text);
//consoleMPDS.writeln(text);
*/

const EDITION = [['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u'],
                 [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Á', 'É', 'Í', 'Ó', 'Ú', 'á', 'é', 'í', 'ó', 'ú']];
const EDITED = 0;
const TO_EDIT = 1;

// 1) 'Acomodar' el text: sense espais, en minúscules, sense accents

let textEdited = '';
for (let char of text) { //javascript permite el for-of partiendo de un String
    
    // en la correcció es discuteix lo d'aplicar teoria vs for afegint condició break per a llegibilitat
    let index = 0;
    let found = false;
    do {
        found = char === EDITION[TO_EDIT][index];
        if (found){
            char = EDITION[EDITED][index];            
        }
        index++;
    } while (!found && index < EDITION[TO_EDIT].length);

    textEdited += char;
}
// 2) mirar si es capicua

// en la correcció es discuteix lo d'aplicar teoria vs for afegint condició break per a llegibilitat
for(let i = 0, j = textEdited.length - 1; isCapicua && i < j; i++, j--){
    isCapicua = textEdited[i] === textEdited[j];
}

consoleMPDS.writeln(`El texto '${text}' ${isCapicua ? 'si' : 'no'} es capicua`);
