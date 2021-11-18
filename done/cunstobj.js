// let car1 = { 
//     brand : "BMW",
//     model : "x7",
//     color : "grey"
// }
// let car2 = {
//     brand : "Audi",
//     model : "RS7",
//     color : "black"
// }

// console.log(car2);

function car(brand,model,color){
    this.Brand=brand
    this.Model=model
    this.Color=color
}

let car1 = new car("BMW","X7","grey"); //this -> {}
let car2 = new car("Audi","RS7","Black"); //this -> {}

// console.log(car2)
// console.log(car1.Model)
// console.log(car2.Color)
car1.Brand="Jaguar"
console.log(car1)
