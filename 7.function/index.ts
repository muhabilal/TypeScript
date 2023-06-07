function get(num):number{
    return num
}
console.log(get(10));

function printHello(): void {
  console.log('Hello!');
} 
printHello();

function multiply(a:number, b:number){
return a*b;
}
console.log("The multiplication is: " + multiply(10, 20));

function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

console.log("The pow is: " + pow(2));

function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
console.log("The add is: " + add(2,2));

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}
console.log("The divide is: " + divide({dividend: 10, divisor: 2}))