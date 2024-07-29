const { Console } = require("console-mpds");

const console = new Console();
const x = console.readNumber("Dame la abcisa, x = ");
const y = console.readNumber("Dame la ordenada, y = ");

let msg = `La coordenada (${x}, ${y})`;
if (x !== 0 && y !== 0){
    let quadrant = 1; //inicializo en 1
    if (y < 0 ){ //si 'y' negativa el quadrante de partida passa a ser el 3
        quadrant = 3; 
    }
    if ( x > 0   !==   y > 0){ //si signos distintos se incrementa en 1
        quadrant++;
    }
    msg += ` está en el ${quadrant}º`;
}else {
    msg += ' no está en ningún';
}
msg += ' quadrante.'
console.writeln(msg);