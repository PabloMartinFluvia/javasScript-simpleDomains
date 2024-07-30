const { Console } = require("console-mpds");

const console = new Console();
let numerator = console.readNumber("Introduce el numerador de la fracción:");
let denominator = console.readNumber("Introduce el denominador de la fracción:");

// lógica aplicada: según el algoritmo de la solución recursiva
// * para la búsqueda del gcd se ignora el signo de los valores introducidos
let gcd1 = numerator * (numerator > 0 ? 1 : -1);
let gcd2 = denominator * (denominator > 0 ? 1 : -1);
while (gcd1 !== gcd2){ // numero indeterminado de veces + puede que la sentencia secuencial se ejecute 0 veces
    if (gcd1 > gcd2){
        gcd1 -= gcd2;
    }else {
        gcd2 -= gcd1;
    }
}

let msg = `La fracción ${numerator}/${denominator}`;
if(gcd1 !== 1){
    numerator /= gcd1;
    denominator /= gcd1;
    msg += ` = ${numerator}/${denominator}`;
}
msg += ` invertida es la fracción ${denominator}/${numerator}`;
console.writeln(msg);