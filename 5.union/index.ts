// Union types are used when a value can be more than a single type.

// Such as when a property would be string or number.
let data:string | number | boolean="bilal";
data=10;
data=true;
console.log(data);
// function example
function printStatusCode(code:string | number | boolean) { 
console.log(`My status code is ${code}`);
}
printStatusCode(404);