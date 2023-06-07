function get(num) {
    return num;
}
console.log(get(10));
function printHello() {
    console.log('Hello!');
}
printHello();
function multiply(a, b) {
    return a * b;
}
console.log("The multiplication is: " + multiply(10, 20));
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log("The pow is: " + pow(2));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log("The add is: " + add(2, 2));
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log("The divide is: " + divide({ dividend: 10, divisor: 2 }));
