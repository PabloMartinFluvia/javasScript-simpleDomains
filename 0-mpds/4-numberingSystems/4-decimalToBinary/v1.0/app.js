const { Console } = require("console-mpds");

const console = new Console();
let number = console.readNumber(`Dame un número decimal: `);
let binary = "";
for(let i=0; i<32; i++){
  //numero decimal se formatea a binario + se coje el primer bit + se antepone concatendo con el string ya calculado
  binary = (number & 1) + binary; 

  if ((i+1) % 4 == 0){
    binary = " " + binary;
  }
  //numero decimal se formatea a binario + se desplaza a la derecha (quita el bit de la derecha) + se guarda el nuevo numero
  number >>= 1; 
}
console.writeln(`Formato binario: ${binary}`);
