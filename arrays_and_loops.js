let myList = [12, "Banana", true];
let fruits = ["Banana", "Orange", "Apple", "Mango"];



//let singletestVar = fruits.pop(1);

//function containsElement(array, element){
   // return array.includes(element)
//}
//function findElementIndex(array, element){
   // return array.indexOf(element)
//}
function removeFirstElement(array){
    array.shift()
    return fruits    
}
function addElementToStart(array, element){
    array.unshift(element)
    return fruits
}
function getSubArray(array, start, end){
    return array.slice(start = 1, end = 3)    
}
function joinArray(array, seperator){
    return array.join(seperator = ' - ')    
}


function initArrays(){
let contentRef = document.getElementById('my_content');
contentRef.innerHTML = "";
for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++){
    contentRef.innerHTML += `<p>+ ${fruits[indexFruits]}</p>`
}

function sumArray(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        
    }
    return sum
}
console.log(sumArray([3, 7, 1, 4]));

function printNumbers(n){
    for (let index = 1; index <= n; index++) {
       console.log(index);

        
    }
    
}
printNumbers(5);

function printNumbersReverse(n){
    for (let index = n; index >= 1; index--) {
        console.log(index);
        
    }
}
printNumbersReverse(5);

function printEveryThirdElement(arr){
    for (let index = 1; index < arr.length; index += 3) {
        console.log(index);
        
    }
}
printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]);
printEveryThirdElement(['a', 'b', 'c', 'd', 'e', 'f', 'g']);

function isPrime(n){
    if (n <= 1){
        return false;
    }
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0){
            return false;
        }
        return true;
        
        
    }
    
}
console.log(isPrime(7));
console.log(isPrime(4));
/*console.log(removeFirstElement(fruits));
console.log(addElementToStart(fruits, "Tomate"));
console.log(getSubArray(fruits));
console.log(joinArray(fruits));
console.log(containsElement(fruits, "Banana"));
console.log(findElementIndex(fruits, "Apple"));*/
}

 


