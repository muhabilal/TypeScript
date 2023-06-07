class Person{
    name:string;
}
const obj=new Person();
console.log(obj.name="Hello");

class App{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    getName(){
        console.log(this.name);
    }
}
const object=new App("Bilal Dar");
object.getName();


//visibility
class Visibility{
    private name:string;
    public constructor(name:string){
        this.name=name;
    }
    public getName():string{ return this.name }
}
const res=new Visibility("Hassan");
console.log(res.getName());