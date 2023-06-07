let a: number=10;
console.log("The value of a is " + a);

let b:string = "Bilal Dar"
console.log("The value of b is " + b);

let c:boolean=false;
console.log("the value of c is " +c);


// special types

// :any
let d:any=10;
console.log("the value of d is ",d);

//:unknown
let data:unknown;
data=10;
data="bilal"
let item:string
if(typeof data=="string"){
    item=data;
    console.log("item is ",item);
}