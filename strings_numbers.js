

let myDivison = 10/5;
let myMultiplication = 10*5;

let myPower = 2**3; // 2 hoch 3 = 8


// Strings      

let myConcat = "Hallo" + " Welt"; // Hallo Welt

// combination of string and number

let myCombination = "5" + 5; // 55 (String + Number = String)

console.log(myDivison);
console.log(myMultiplication);
console.log(myPower);
console.log(myConcat);
console.log(myCombination); 

let myTestString = "Hallo Welt ";

myTestString = myTestString.trim(); // entfernt Leerzeichen am Anfang und Ende
console.log(myTestString.length); // Länge des Strings

myObjects = {
    firstname : "Alex",
    lastname : "Vielkind",
}

function getFullname(myObject){
    return myObject.firstname + " " + myObject.lastname;
}

console.log(getFullname(myObjects));

let myString2 = "Hallo Welt";

function capitalizeLetters(myString2){
    return myString2.toUpperCase();
}

console.log(capitalizeLetters(myString2));

let myString3 = "HalloWelt";

function countLetters(myString3){
    return myString3.length;
}

console.log(countLetters(myString3));