const { Console } = require("console-mpds");

const console = new Console();
let min = console.readNumber(`Introduce el mínimo del intervalo:`);
let max = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo):`);
const amount = console.readNumber(`Introduce una cantidad positiva de intervalos:`);

const partsLength = (max - min) / amount;
let msg = `El intervalo [${min}, ${max}] dividido en ${amount} intervalo${amount > 1? `s son` : ` es`}`;
for (let i = 0; i < amount; i++) {
    
    //Opción actualizando valores  (max/min ya no pueden ser const)
    max = min + partsLength;
    msg += ` [${min}, ${max}]`;
    if (i < amount - 2) {
        msg += `,`;
    } else if (i === amount - 2) {
        msg += ` y`;
    }
    
    min = max;

    /*
    //Opción sin actualizar valores, y calculando resultados en función de la iteración
    msg += ` [${min + i * partsLength}, ${min + (i + 1) * partsLength}]`;
    if (i < amount - 2) {
        msg += `,`;
    } else if (i === amount - 2) {
        msg += ` y`;
    }
    */
}
console.writeln(msg);