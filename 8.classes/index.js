var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj = new Person();
console.log(obj.name = "Hello");
var App = /** @class */ (function () {
    function App(name) {
        this.name = name;
    }
    App.prototype.getName = function () {
        console.log(this.name);
    };
    return App;
}());
var object = new App("Bilal Dar");
object.getName();
//visibility
var Visibility = /** @class */ (function () {
    function Visibility(name) {
        this.name = name;
    }
    Visibility.prototype.getName = function () { return this.name; };
    return Visibility;
}());
var res = new Visibility("Hassan");
console.log(res.getName());
