const { Console } = require("console-mpds");

const FINAL = 0;
const UPPER_CASE = 1;
const UPPER_CASE_CUTE = UPPER_CASE;
const LOWER_CASE_CUTE = 2;

const ALPHABET = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
                 ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']];

const VOWELS = [['a', 'e', 'i', 'o', 'u'],  ['Á', 'É', 'Í', 'Ó', 'Ú'], ['á', 'é', 'í', 'ó', 'ú']];


const consoleMPDS = new Console();

const text = consoleMPDS.readString(`Escribe una frase: `);
/*
Problema: método consoleMPDS.readString no lee bien las letras accentuadas (independientemente de si 
són mayúsculas o minúsculas).
//console.log(text);
//consoleMPDS.writeln(text);
*/

// 1) 'Acomodar' el text: sense espais, en minúscules, sense accents

let textFinal = [];
for (let char of text) { //javascript permite el for-of partiendo de un String
    let auxIndex = 0;
    if (ALPHABET[UPPER_CASE][auxIndex] <= char && char <= ALPHABET[UPPER_CASE][ALPHABET[FINAL].length - 1]) {       
        while (ALPHABET[UPPER_CASE][auxIndex] !== char) {
            auxIndex++;
        }
        char = ALPHABET[FINAL][auxIndex];
    } else if (char === 'Ñ') { // al ser ñ/Ñ carácteres especiales de ES -> orden en ASCII no permite establecer un patrón
        char = 'ñ';
    } else if (VOWELS[UPPER_CASE_CUTE][auxIndex] <= char && char <= VOWELS[UPPER_CASE_CUTE][VOWELS[FINAL].length - 1]) {
        while (VOWELS[UPPER_CASE_CUTE][auxIndex] !== char) {
            auxIndex++;
        }
        char = VOWELS[auxIndex];
    } else if (VOWELS[LOWER_CASE_CUTE][auxIndex] <= char && char <= VOWELS[LOWER_CASE_CUTE][VOWELS[FINAL].length - 1]) {
        while (VOWELS[LOWER_CASE_CUTE][auxIndex] !== char) {
            auxIndex++;
        }
        char = VOWELS[auxIndex];
    }

    if (char !== ' ') {
        textFinal[textFinal.length] = char;
    }
}
// 2) mirar si es capicua

consoleMPDS.writeln(textFinal);

// Opción "correcta": do-while
let isCapicua;
let i = 0;
let j = textFinal.length - 1;
do {
    isCapicua = textFinal[i] === textFinal[j];
    i++;
    j--;
} while (isCapicua && i < j);


/*
// Opción más compacta: for con 2 indices, y "pervertir" la estructura de la condición.
//      Se puede hacer para reducir mucho el código (se evita las 2 declaraciones y los 2 inrementos)
//      Pero hay que dejar muy claro, en la condición, que hay un 'break' encubierto
let isCapicua = true;
for(let i = 0, j = textFinal.length - 1; isCapicua && i < j; i++, j--){
    isCapicua = textFinal[i] === textFinal[j];
}
*/

consoleMPDS.writeln(`El texto '${text}' ${isCapicua ? 'si' : 'no'} es capicua`);

/*
Otra opción más estructurada i eficiente sería empezar con (2), y entre la linia 56-57 hacer la edición
de cada pareja de carácteres (i si alguno és ' ' -> saltar a la siguiente iteración del do-while
variando solo el indice de ese carácter).
Esta opción es más legible y entendible. No hace falta optimizarla, al menos hasta que no hubiese
un problema de eficiencia.
*/