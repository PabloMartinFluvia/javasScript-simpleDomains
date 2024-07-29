const { Console } = require("console-mpds");

const console = new Console();
const sideA = console.readNumber("Dame el 1º lado del triangulo: ");
const sideB = console.readNumber("Dame el 2º lado del triangulo: ");
const sideC = console.readNumber("Dame el 3º lado del triangulo: ");
let greater = sideA; // aprovechando inicialización
if (sideB > greater) {
  greater = sideB;
}
if (sideC > greater) {
  greater = sideC;
}
let msg = `Los lados ${sideA}, ${sideB} y ${sideC} `;
const isTriangle = greater < (sideA + sideB + sideC) - greater; //mayor < menor1 + menor2
if (!isTriangle) {
  msg += "NO ";
}
msg += `forman un triangulo`;
if (isTriangle) { //algoritmo repite codigo en las condiciones, xo no en la acumulación del mensage
  msg += ` de tipo`;
  if (sideA == sideB && sideB == sideC) {
    msg += " equilatero";
  } else if (sideA == sideB || sideB == sideC || sideC == sideA) {
    msg += " isosceles";
  } else {
    msg += " escaleno";
  }
}
console.writeln(msg);
