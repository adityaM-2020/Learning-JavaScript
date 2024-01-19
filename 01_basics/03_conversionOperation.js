let score = "Aditya";

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Aditya";

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2); => 4
// console.log(2-2); => 0
// console.log(2*2); => 4 
// console.log(2**3); => 8 (exponential operation)
// console.log(2/3); => 0.66666
// console.log(2%3); => 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); => 12 (string)
// console.log(1 + "2"); => 12 (string)
// console.log("1" + 2 + 2); => 122 =>string+number = string
// console.log(1 + 2 + "2"); => 32 =>number+string = string

// tricky conversion but not a good practice
// console.log(+true); => 1 
// console.log(+""); => 0 

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //poor code readability , Don't use such type of practices

let gameCounter = 100, gamePostfix = 200;
++gameCounter; //prefix operation
console.log(gameCounter);
gamePostfix++;
console.log(gamePostfix);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion