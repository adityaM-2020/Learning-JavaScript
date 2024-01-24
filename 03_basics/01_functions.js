function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()

function addTwoNumbers(number1, number2){

    // let sum = number1 + number2
    // return sum
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
//console.log("Result: ", result);


function UserMessage(username){
    return `${username} just logged in`
}
//console.log(UserMessage()); //=> undefined just logged in


//*****Default Arguments during function definition*****/
function defaultUserMessage(username = "Adi"){
    return `${username} just logged in`
}
console.log(defaultUserMessage("Aditya Maurya"))
console.log(defaultUserMessage())


function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Aditya"))
// console.log(loginUserMessage()) 


//***********Rest parameter in function***********/
function calculateCartPrice(val1, val2, ...num1){ 
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))


//********passing Object to function********
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({
    username: "sam",
    price: 399
})

//********passing Array to function********
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));