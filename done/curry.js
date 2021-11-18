function add(a,b){
    console.log(a+b);
}
//add(5,10);
// this variable referes to add function
// 5 -> first parameter
let addWith2 = add.bind(this)
addWith2(3,5)