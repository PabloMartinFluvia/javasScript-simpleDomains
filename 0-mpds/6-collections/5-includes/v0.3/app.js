const { Console } = require("console-mpds");

const console = new Console();
let key = console.readNumber(`Dame un valor para buscar en la serie: `);
let data = readData();
const found = find(data, key);
console.writeln(`En la serie ${found ? `sí` : `no`} se encuentra el valor ${key}`);

function readData() {
  let data = [];
  let i = 0;
  do {
    data[i] = console.readString(`Dame un valor o un punto "." para finalizar la serie`);
    i++;
  } while (data[i - 1] !== ".");
  //i--; // per a que funcioni
  delete data[i]; // error ? no hauria d'eliminar el i-1 (on està el '.')? En el index i no hi ha res assignat...
  return data;
}

function find(data, key){
  for (let i = 0; i < data.length - 1; i++) {
    if (key == data[i]) {
      return true;
    }
  }  
  return false;
}