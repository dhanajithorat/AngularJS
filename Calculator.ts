class Calculator
{
    add(x:number, y:number):number { return x + y; }
    subtract(x:number, y:number):number { return x - y; }
    multiply(x:number, y:number):number { return x * y; }
    divide(x:number, y:number):number { return x / y; }
}

function withSummation(a, b, c, d)
{
    return this.sum = () => a + b + c + d;
}

Object.assign(Calculator.prototype, withSummation);

//let sumFunction = withSummation(1, 2, 3, 4);
let calc = new Calculator();
withSummation.call(calc);
console.log(calc.sum(1,2,3,4));