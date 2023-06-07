const cars:{type:string,model:string,year:number}={
    type:"TOYOTA",
    model:"Corolla",
    year:2023
};
console.log("The TS Object is: " + JSON.stringify(cars));

interface userType{
name:string,
age:number,
address:any
}
let users:userType={
name:'Bilal',
age:24,
address:'hghghgh'
}
console.log(users);