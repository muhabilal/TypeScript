class parent{
    name:string;
    setName(name):void{
        this.name = name;
    }
}
class child extends parent {
getName():string{
    return this.name;
}
}
let c1=new child();
c1.setName("Bilal Dar");
console.log(c1.getName());