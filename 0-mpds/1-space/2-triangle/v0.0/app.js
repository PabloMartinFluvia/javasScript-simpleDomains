const { Console } = require("console-mpds");

const console = new Console();
const sideA = console.readNumber("Dame el 1º lado del triangulo: ");
let total = sideA;
let greater = sideA;
const sideB = console.readNumber("Dame el 2º lado del triangulo: ");
total += sideB;
greater = greater > sideB ? greater : sideB;
const sideC = console.readNumber("Dame el 3º lado del triangulo: ");
total += sideC;
greater = greater > sideC ? greater : sideC;
const equilateral = sideA == sideB && sideB == sideC ? "equilateralo" : "";
const isosceles = sideA == sideB || sideB == sideC ? "isosceles" : "";
let msgType = equilateral !== `` ? equilateral : isosceles;
const scalene = sideA != sideB && sideB != sideC && sideC != sideA ? "escaleno" : "";
msgType = scalene !== `` ? scalene : msgType;

//en solució de documentació msgType MAI SERÀ LA CADENA BUIDA
//-> Los lados 3, 2 y 100 NO forman un triangulo de tipo escaleno
//-> Los lados 3, 3 y 100 NO forman un triangulo de tipo isosceles
console.writeln(`Los lados ${sideA}, ${sideB} y ${sideC}${total - greater > greater ? "" : " NO"} \
forman un triangulo ${msgType !== `` ? `de tipo ${msgType}` : ""}`);

//jo
let msg = "forman un triangulo";
console.writeln(`Los lados ${sideA}, ${sideB} y ${sideC} \
${total-greater>greater ? `${msg} de tipo ${msgType}` : `NO ${msg}`}`);

//////////////////////////////
// jo l'arreglaria més, ja que no té sentit mirar si és euilàter/iscosceles/escale si NO es forma un triangle.