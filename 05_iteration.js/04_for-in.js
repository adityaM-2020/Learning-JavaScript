//for in Loop

//********Objects********
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


//**********Arrays**********
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key , programming[key]);
}


//************Maps**********
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

/*
for (const key in map) {
    console.log(key);
}
//Nothing will be printed in output => map is not iterable by for-in loop , avoid using for in loop in case of maps.
*/


//In JavaScript, the for...of loop is used to iterate over the values of an iterable object, such as an array, string, or other iterable objects. However, when it comes to iterating over the properties of an object, including its own and inherited properties, you typically use the for...in loop.