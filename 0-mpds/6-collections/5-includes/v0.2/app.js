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
let found = false;
//solución erronea!: no és un 'for' -> no se sabe el número que se tendrá que repetir
//-> poner en la condición '&& !found' y canviar el valor a true cuando se encuentre
//es análogo a no poner la condición y que cuando se encuentre hacer un 'break' -> goto encubierto
//-> ver solución 0.1
for (let i = 0; i < data.length - 1 && !found; i++) {
  if (key == data[i]) {
    found = true;
  }
}
console.writeln(`En la serie ${found ? `sí` : `no`} se encuentra el valor ${key}`);

