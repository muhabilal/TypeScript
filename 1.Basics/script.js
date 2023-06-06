// function greeter(name: string) {
//   console.log(`Hello, ${name}!`);
// }
// greeter("TypeScript");
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("Class test");
    };
    return App;
}());
var result = new App();
result.test();
