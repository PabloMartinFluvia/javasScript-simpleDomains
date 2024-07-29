const { Console } = require("console-mpds");

const console = new Console();
let key = console.readNumber(`Dame un valor para buscar en la serie: `);
let found = false;
do {
  value = console.readString(`Dame un valor o un punto "." para finalizar la serie`);
  //codigo del ejemplo
  if (key == value) { //coerción a number (key es número, pero value es string)
    found = true;
  }
 
 //codigo mio:
  /*
  if(key === - - value){ //comparar numbers: requiere conversión de value a number
    found = true;
  }
  */
  /*
  if(key + '' === value){ //comparar strings: requiere conversión de key a string
    found = true;
  }
  */
} while (value !== ".");
console.writeln(`En la serie ${found ? `sí` : `no`} se encuentra el valor ${key}`);
