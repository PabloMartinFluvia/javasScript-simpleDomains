const { Console } = require("console-mpds");

const console = new Console();
let key = console.readNumber(`Dame un valor para buscar en la serie: `);
let data = [];
//key es number, mientras que data tendrá strings -> ojo al comparar, requiere coerción si no se convierte alguno previamente
let i = 0;
do {
  data[i] = console.readString(`Dame un valor o un punto "." para finalizar la serie`);
  i++;
} while (data[i - 1] !== ".");
i = 0;
//es un while, pk si se encuentra en la primera posición del array no será necesario incrementar el indice
while (key != data[i] && i < data.length - 2) { // '-2' pk no hace falta mirar el último caracter, ya que es un '.'
  i++;
}
let found = key == data[i];
console.writeln(`En la serie ${found ? `sí` : `no`} se encuentra el valor ${key}`);
