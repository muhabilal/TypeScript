type carYear=number;
type carType=string;
type carModel=string;
type car={
    year:carYear,
    type:carType,
    model:carModel
}
const CarYear:carYear=2021;
const CarType:carType="toyota";
const CarModel:carModel="corolla"
const Car:car={
    year:CarYear,
    type:CarType,
    model:CarModel
}
console.log(Car);

interface Rectangle{
    height: number,
    width: number,
    getFun:()=>string
}
const rectangle:Rectangle={
    height:100,
    width:100,
    getFun:function(){
        return "Hello World"
    }
}
const res=rectangle.height*rectangle.width;
console.log("The rectangle", rectangle);
console.log("The rectangle", rectangle.getFun());
console.log("The rectangle", res);

