// console.log(2 > 1); =>true
// console.log(2 >= 1); =>true
// console.log(2 < 1); =>false
// console.log(2 == 1); =>false
// console.log(2 != 1); =>true


// console.log("2" > 1); =>true
// console.log("02" > 1); =>true

//console.log("1" == true); => true

console.log(null == 0); //=> false
console.log(null > 0); //=> false
console.log(null >= 0); //=> true => Reason : Equality check (==) and comparison(<, >, <=, >=) works differently. Comaprison converts null to a number and treats it as 0.

console.log(undefined == 0); // => false
console.log(undefined > 0); // => false
console.log(undefined < 0); // => false

// Strict Equality check (=== )
console.log("2" === 2); // => false