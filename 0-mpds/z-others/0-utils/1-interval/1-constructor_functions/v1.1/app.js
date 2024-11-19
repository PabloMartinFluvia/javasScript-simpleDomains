const { Console } = require("console-mpds");

const consoleMPDS = new Console();

// inicializar atributos en función constructora
// los mètodos (públicos) dados de alta en el prototipo

function Interval(min, max) {
    this.min = min;
    this.max = max;
}

Interval.prototype.read = function () {
    let error;
    do {
        this.min = consoleMPDS.readNumber(`Introduzca el mínimo: `);
        this.max = consoleMPDS.readNumber(`Introduzca el máximo: `);
        error = this.min > this.max;
        if (error) {
            consoleMPDS.writeln(`El mínimo debe ser menor o igual al máximo`);
        }
    } while (error);
};

Interval.prototype.writeln = function () {
    this.write();
    consoleMPDS.writeln();
};

Interval.prototype.write = function () {
    consoleMPDS.write(this.toString());
};

Interval.prototype.toString = function () {
    return `[${this.min}, ${this.max}]`;
};

Interval.prototype.length = function () {
    return this.max - this.min;
};

Interval.prototype.middlePoint = function () {
    return this.min + this.length() / 2;
}

Interval.prototype.shifted = function (shiftment) {
    return new Interval(this.min + shiftment, this.max + shiftment);
};

Interval.prototype.symmetrical = function () {
    return new Interval(-this.max, -this.min);
};

Interval.prototype.adjust = function (interval) {
    return new Interval(adjustValue(this.min), adjustValue(this.max));

    function adjustValue(value) { // función privada: local en este mètodo <-> no se puede acceder des de otros mètodos
        if (value < interval.min) {
            return interval.min;
        } else if (value > interval.max) {
            return interval.max;
        }
        return value;
    }
};

Interval.prototype.scale = function (value) {
    let scaledMiddle = this.min + this.length() / 2;
    let scaledHalfLength = this.length() * value / 2;
    return new Interval(scaledMiddle - scaledHalfLength, scaledMiddle + scaledHalfLength);
};

// parametro puede ser un intervalo o un numero
Interval.prototype.includes = function (value) {
    if (typeof value === `number`) {
        return this.min <= value && value <= this.max;
    }
    let { min, max } = value;
    return this.includes(min) && this.includes(max);
};

Interval.prototype.intersected = function (interval) {
    return this.includes(interval.min)
        || this.includes(interval.max)
        || interval.includes(this);
};

Interval.prototype.intersection = function (interval) {
    if (this.includes(interval)) {
        return interval;
    }
    if (interval.includes(this)) {
        return this;
    }
    if (this.includes(interval.min)) {
        return new Interval(interval.min, this.max);
    }
    if (this.includes(interval.max)) {
        return new Interval(this.min, interval.max);
    }
    return null;
};

Interval.prototype.union = function (interval) {
    if (!this.intersected(interval)) {
        return null;
    }
    return new Interval(
        this.min < interval.min ? this.min : interval.min,
        this.max > interval.max ? this.max : interval.max
    );
};

// obtener N(=amount) puntos equidostantes en el rango [min, max]
// N = 1 -> middle point. N = 2 -> [min, max]. N = 3 -> [min, middlepoint, max] . N = 4 -> etc...
Interval.prototype.values = function (amount) {
    if (amount === 1) {
        return [this.middlePoint()];
    }
    let distance = this.length() / (amount - 1);
    let result = [this.min];
    for (let i = 1; i < amount - 1; i++) {
        result[i] = result[i - 1] + distance;
    }
    result[result.length] = this.max;
    return result;
};

// split en 3 intervalos implica obtener el array de 4 values
Interval.prototype.split = function (amount) {
    let values = this.values(amount + 1);
    let result = [];
    for (let i = 0; i < amount; i++) {
        result[i] = new Interval(values[i], values[i + 1]);
    }
    return result;
};

Interval.prototype.equals = function (interval) {
    return this.min === interval.min && this.max === interval.max;
};

Interval.prototype.clone = function () {
    return new Interval(this.min, this.max);
};

// statics
Interval.MIN = -50;
Interval.MAX = 50;
Interval.createRandom = function (amount) {
    let intervals = [];
    for (let i = 0; i < amount; i++) {
        let min = randomValue();
        let max = randomValue();
        if (min > max) {
            let temp = min;
            min = max;
            max = temp;
        }
        intervals[i] = new Interval(min, max);
    }
    return intervals;

    function randomValue() {
        return parseInt(Math.random() * (Interval.MAX - Interval.MIN)) + Interval.MIN;
    }
}

// preparar los intervalos a testear
const intervals = Interval.createRandom(3);
/*
Tests:
un array de funciones (flecha). En cada una se prueba un mètodo de un interval
    Devuelve un String con: estado del intervalo + que mètodo se ha ejecutado + que ha devuelto el mètodo
Como la prueba se hará mediante intervals.map(testX) -> testX debe ser ina función callback ->
    parámetros de la función callback: 
        el interval a mapear, 
        el indice del interval dentro de intervals, 
        los intervals (sobre el que se llama .map)   
*/
const tests = [
    interval =>
        //`${interval.toString()}.toString() => ${interval.toString()}`, // no hace falta ${interval.toString()}, con ${interval} es suficiente
        `${interval}.toString() => ${interval.toString()}`,
    interval =>
        `${interval}.length() => ${interval.length()}`,
    (interval, index, intervals) => { // añadido argumento intervals, para que no acceda a variable global
        let value = index - intervals.length / 2;
        return `${interval}.shifted(${value}) => ${interval.shifted(value)}`
    },
    interval =>
        `${interval}.symmetrical() => ${interval.symmetrical()}`,
    (interval, index, intervals) => {
        let next = (index + 1) % intervals.length;
        return `${interval}.adjust(${intervals[next]}) => ${interval.adjust(intervals[next])}`;
    },
    (interval, index) =>
        `${interval}.scale(${index}) => ${interval.scale(index)}`,
    (interval, index, intervals) => {
        let value = index - intervals.length / 2;
        return `${interval}.includes(${value}) => ${interval.includes(value)}`;
    },
    (interval, index, intervals) => {
        let next = (index + 1) % intervals.length;
        return `${interval}.includes(${intervals[next]}) => ${interval.includes(intervals[next])}`;
    },
    (interval, index, intervals) => {
        let next = (index + 1) % intervals.length;
        return `${interval}.intersected(${intervals[next]}) => ${interval.intersected(intervals[next])}`;
    },
    (interval, index, intervals) => {
        let next = (index + 1) % intervals.length;
        return `${interval}.intersection(${intervals[next]}) => ${interval.intersection(intervals[next])}`;
    },
    (interval, index, intervals) => {
        let next = (index + 1) % intervals.length;
        return `${interval}.union(${intervals[next]}) => ${interval.union(intervals[next])}`;
    },
    (interval, index) => {
        let amount = index + 1;
        // canvio previous por accumulatedResult
        // canvio current por currentValue
        return `${interval}.values(${amount}) => ${interval.values(amount)
            .reduce((accumulatedResult, currentValue) => `${accumulatedResult}${currentValue} `, ``)}`;
    },
    (interval, index) => {
        let amount = index + 1;
        // canvio previous por accumulatedResult
        // canvio current por currentSubInterval
        return `${interval}.split(${amount}) => ${interval.split(amount)
            .reduce((accumulatedResult, currentSubInterval) => `${accumulatedResult}${currentSubInterval} `, ``)}`;
    }
];

consoleMPDS.writeln(
    tests.map(
        test => intervals.map(test)).reduce(
            (previous, block) =>
                `${previous}${block.reduce(
                    (previous, msg) =>
                        `${previous}${msg}\n`,
                    ``)}\n`,
            ``));
/*
// Traducció:
consoleMPDS.writeln(
    tests.map(
        test => intervals.map(test) // [resultI1TX, resultI2TX, resultI3TX]
    ) // [[resultI1T1, resultI2T1, resultI3T1], [resultI1T2, resultI2T2, resultI3T2], ....]
        .reduce((previous, blockTestResult) =>
            `${previous}${blockTestResult.reduce((previous, msg) => `${previous}${msg}\n`, ``) // convertir a string separant cada item (intervalResultTX) amb un salt de linia                                                                            
            }\n`, ``) // convertir a string separant cada item (string en 3 linies) amb un salt de linia
);
*/

consoleMPDS.writeln(`------------Test executed "a mi manera"-------------`)
consoleMPDS.write(
    executeAllTests()
);

function executeAllTests() {
    const allTestsResults = tests.map(test => {
        const testResultsForAllIntervals = intervals.map(test); // test es un (interval, index, intervals) => string que muestra el resultado de ejecutar un mètodo
        const testMsg = testResultsForAllIntervals
            .reduce((accumulatedMsg, intervalTestResul) => `${accumulatedMsg}${intervalTestResul}\n`, ``);
        return testMsg;
    });
    const resultMsg = allTestsResults
        .reduce((accumulatedMsg, testResult) => `${accumulatedMsg}${testResult}\n`, ``);
    return resultMsg;
}

consoleMPDS.writeln(`------------Test executed "a mi manera y del tirón"-------------`)
consoleMPDS.write(
    tests.map(testFunction => 
                intervals.map(testFunction)
                         .reduce((accumulatedMsg, intervalTestResul) => `${accumulatedMsg}${intervalTestResul}\n`, ``))
         .reduce((accumulatedMsg, testResultBlockMsg) => `${accumulatedMsg}${testResultBlockMsg}\n`, ``)
);