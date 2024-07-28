const { Console } = require("console-mpds");

const console = new Console();
const abcissa = console.readNumber("Dame la abcisa de la coordenada:");
const ordinate = console.readNumber("Dame la ordenada de la coordenada:");
/*
Enunciat erroni. Lo correcte es:
Eje de abcisas <-> eje X <-> totes les ordenades/y === 0
Eje de ordeenadas <-> eje Y <-> totes les abcisas/x === 0
*/
const isOnAbcissesAxe = ordinate === 0;
const isOnOrdinatesAxe = abcissa === 0;
//usada la acumulación (vs concatenación o vs anidación de operadores ternarios) por legibilidad
let axisMsg = isOnAbcissesAxe || isOnOrdinatesAxe ? "está en el eje" : "no está en ningún eje";
axisMsg += isOnAbcissesAxe ? " de abcisas" : "";
axisMsg += isOnAbcissesAxe && isOnOrdinatesAxe ? " y" : "";
axisMsg += isOnOrdinatesAxe ? " de ordenadas" : ""; 
console.writeln(`
La coordenada (${abcissa}, ${ordinate}) ${axisMsg}`);