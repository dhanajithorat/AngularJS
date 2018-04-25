// var Calculator = /** @class */ (function () {
//     function Calculator() {
//     }
//     Calculator.prototype.add = function (x, y) { return x + y; };
//     Calculator.prototype.subtract = function (x, y) { return x - y; };
//     Calculator.prototype.multiply = function (x, y) { return x * y; };
//     Calculator.prototype.divide = function (x, y) { return x / y; };
//     return Calculator;
// }());

class Calculator
{
    add(x, y) { return x + y; }
    subtract(x, y) { return x - y; }
    multiply(x, y) { return x * y; }
    divide(x, y) { return x / y; }
}

function withSummation() {
    this.sum = function (a, b, c, d) { return a + b + c + d; };
}

// function withSum(a, b ,c , d) {
//     return this.add(a, b) + this.add(c, d);
// }

Object.assign(Calculator.prototype, withSummation);
//let sumFunction = withSummation(1, 2, 3, 4);

var calc = new Calculator();
withSummation.call(calc);
console.log(calc.sum(1, 2, 3, 4));
