
let myCondition = true; //true

myCondition = !myCondition; // false not operator

myCondition = true || true || false; // true or operator

myCondition = false && false; // false and operator

myCondition = 45 == 45; // == testet ob exakt gleich ist, ohne Type
myCondition = 45 === 45; // === testet ob exakt gleich ist, mit Type
myCondition = 45 === "45"; // false

myCondition = 45 > 123; // false greater than
myCondition = 45 < 123; // true less than

myCondition = 45 >= 45; // true greater than or equal
myCondition = 45 <= 44; // false less than or equal

myCondition = 45 != 44; // = testet ob exakt gleich, ohne Type
myCondition = 45 !== 47; // testet ob exakt gleich, mit Type -> true
myCondition = 45 !== "47"; // testet ob exakt gleich, mit Type -> true

console.log(myCondition);


let myIfCondition = true;

if(myIfCondition){
    console.log("hello world");
} else if(!myIfCondition){
    console.log("hello galaxy");
} else {
    console.log("hello universe");
}