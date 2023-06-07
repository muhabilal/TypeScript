// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
var data = "bilal";
data = 10;
data = true;
console.log(data);
function printStatusCode(code) {
    console.log("My status code is ".concat(code));
}
printStatusCode(404);
