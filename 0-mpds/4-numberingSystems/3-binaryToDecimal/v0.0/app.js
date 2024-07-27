//operadors de bits
const { Console } = require("./console");

const console = new Console();
let binary = console.readNumber(`Dame un número inferior a 16 en binario (0/1): `);
let msg = `El número ${binary} binario corresponde con `;
let decimal = 0;
const firstBit = binary % 10;
decimal = decimal + firstBit;
binary = binary - firstBit;
binary = binary / 10;
const secondBit = binary % 10;
decimal = decimal + secondBit * 2;
binary = binary - secondBit;
binary = binary / 10;
const thirdBit = binary % 10;
decimal = decimal + thirdBit * 4;
binary = binary - thirdBit;
binary = binary / 10;
const fourthBit = binary;
decimal = decimal + fourthBit * 8;
binary = binary - fourthBit;
msg += `el número ${decimal} decimal`;
console.writeln(msg);
