class person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }

    showDetails(){
        return this.name;
    }
}
class personchild extends person{
    constructor(){
        super("adam")
    }
}
let person1 = new personchild();
console.log(person1.showDetails());