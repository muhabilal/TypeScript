let data:string[]=["bilal","hassan","zohaib"];
// data.push("hamza");
console.log(data);

const names:readonly string[]=["bilal","hassan","zohaib"];
//names.push("Jack");  Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
console.log(names);

//**********Tuple************/
// A tuple is a typed array 
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);

const values:readonly [number, boolean, string] = [5, false, 'Coding'];
console.log(values);

//Named Tuples
const graph:[x:number, y:number]=[1,2];
console.log(graph);
//Destructuring Tuples
const des:[number,number]=[10,20];
const [x,y]=des;
console.log(x,y);