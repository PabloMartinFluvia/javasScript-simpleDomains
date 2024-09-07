const { Console } = require("console-mpds");

const console = new Console();
function converter(unit, factor, offset, input) {
    return `${((offset + input) * factor).toFixed(2)} ${unit}`;
}

console.writeln(converter('km', 1.60936, 0, 10)); // 16.09 km
console.writeln(converter('km', 1.60936, 0, 100)); // 160.94 km
console.writeln(converter('kg', 0.45460, 0, 2.5)); // 1.14 kg
console.writeln(converter('kg', 0.45460, 0, 5)); // 2.27 kg
console.writeln(converter('ºC', 0.5556, -32, 98)); // 36.67 ºC
console.writeln(converter('ºC', 0.5556, -32, 0)); // -17.78 ºC