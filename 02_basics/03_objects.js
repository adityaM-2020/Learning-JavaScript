//Ways to define objects - Object literals, using 'new' keyword, Object.create() 

//*********object literals***********
const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name: "Aditya",
    "full name": "Aditya Maurya",
    mySym1: "myval1",
    [mySym2] : "myval2",
    age: 18,
    location: "Jaipur",
    email: "aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser["mySym1"])
// console.log(JsUser[mySym2])
// console.log(JsUser);

JsUser.greetingOne = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greetingOne);

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo());

JsUser.email = "aditya@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "aditya@microsoft.com"
console.log(JsUser);