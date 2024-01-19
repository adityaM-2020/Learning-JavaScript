const name = "Aditya Maurya";
const repoCount = 4;
console.log(name + repoCount + " Value"); // Not a good way. Try String Interpolation method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String Interpolation 

const gameName = new String('Aditya-hc-com');
console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 9);
console.log(anotherString);

const newStringOne = "   Aditya    ";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(gameName.split('-')); 


const url = "https://Aditya.com/Aditya%20Maurya";
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));

