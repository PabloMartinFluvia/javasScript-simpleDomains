const { Console } = require("console-mpds");

const console = new Console();
const amount = console.readNumber(`Dame un número positivo: `);
for (let i = 1; i <= amount; i++) {
  printBlock(i);
}

function printBlock(number) {
  let msg = ``;
  if (number === 1) {
    msg += `U\n`;
  } else if (isPrime(number)) {
    for (let i = 0; i < number; i++) {
      msg += `P`;
    }
    msg += `\n`;
  } else {
    const divisor = getFirstDivisor(number);
    for (let i = 0; i < divisor; i++) {
      for (let j = 0; j < number / divisor; j++) {
        msg += `C`;
      }
      msg += `\n`;
    }
  }
  console.write(msg);
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  return number === getFirstDivisor(number);
}

function getFirstDivisor(number) {
  let divisor = 2;
  while (number % divisor != 0) {
    divisor++;
  }
  return divisor;
}