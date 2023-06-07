var data = ["bilal", "hassan", "zohaib"];
// data.push("hamza");
console.log(data);
var names = ["bilal", "hassan", "zohaib"];
//names.push("Jack");  Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
console.log(names);
//**********Tuple************/
// A tuple is a typed array 
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);
var values = [5, false, 'Coding'];
console.log(values);
//Named Tuples
var graph = [1, 2];
console.log(graph);
//Destructuring Tuples
var des = [10, 20];
var x = des[0], y = des[1];
console.log(x, y);
