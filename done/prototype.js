//let arr = [1,2,3,4]

let person1 = {
    name : "prabal nikkumbh",
    age : 21,

    showDetails : function(){
        console.log(this.name + " " + this.age)
    }
}
//person.showDetails();
let person2 = {
    name : "adam"
}
person2.__proto__ = person1;
console.log(person2.name)
console.log(person2.age)