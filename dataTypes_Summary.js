// ***********Primitive DataType*************
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const scoreValue = "abcjj78njnm"
const score = 100
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123'); 

console.log(id === anotherId); // => false => symbol creates unique value

const bigNumber = 3456543576654356754n;
console.log(typeof bigNumber); // => bigint



// *************Reference DataType(Non primitive)**************
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Aditya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros); //=> object
console.log(typeof myObj); //=> object
console.log(typeof myFunction); //=> function

// https://262.ecma-international.org/5.1/#sec-11.4.3