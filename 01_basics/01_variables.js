//'var' can be redeclared and reassigned
var a=2;
var a=11; console.log(a);
a = 17; console.log(a); 
/*Prefer not to use 'var' because of issue in block scope and functional scope*/

let b = 100;
console.log(b);
// let b = 101; ->'let' can not be redeclared
b = 102;//'let' can be reassigned
console.log(b);

//const c; ->initialization of 'const' is must at time of its declaration
const d=200;
console.log(d);
//const d=201; -> 'const'can not be redeclared 
//d = 202; -> 'const' can not be reassigned 

e=300; //not a good practice but it will work fine
console.log(e);


