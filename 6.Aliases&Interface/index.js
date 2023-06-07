var CarYear = 2021;
var CarType = "toyota";
var CarModel = "corolla";
var Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
};
console.log(Car);
var rectangle = {
    height: 100,
    width: 100,
    getFun: function () {
        return "Hello World";
    }
};
var res = rectangle.height * rectangle.width;
console.log("The rectangle", rectangle);
console.log("The rectangle", rectangle.getFun());
console.log("The rectangle", res);
