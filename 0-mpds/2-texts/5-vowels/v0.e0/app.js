const { Console } = require("console-mpds");

const console = new Console();
const text = console.readString(`¿Dame un mensaje terminado en "."?:`);
//precondición: solo hay un '.' en la cadena (el final)
let index = 0;
while (text[index] !== '.'){
    index++;
}
console.writeln(`Tu mensaje "${text}" tiene ${index} caracteres significativos, sin contar el punto final!`);