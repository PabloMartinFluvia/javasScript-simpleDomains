const { Console } = require("console-mpds");

const console = new Console();

// sin ganancia, ya que cada vez que se cree el objeto (lo hace 'new') se dará de alta sus objetos función (sus mètodos)
function romanGenerator(number) {
    this.number = number;
    this.toString = function () {
        return this.number;
    };
    this.decimalToRoman = function () {

        let romanNumbers = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
        let getRoman = "";
        if (this.number < 1000) {
            for (i in romanNumbers) {
                while (this.number >= romanNumbers[i]) {
                    getRoman += i;
                    this.number -= romanNumbers[i];
                }
            }
        } else {
            return 'mayor que 1000';
        }

        return getRoman;

    }
}
let romanizer = new romanGenerator(841);
let msg = "El número " + romanizer.toString() + " es " + romanizer.decimalToRoman();

console.writeln(msg);
