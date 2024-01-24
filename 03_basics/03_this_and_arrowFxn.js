/**************'this' keyword in JavaScript*********/

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage()
user.username = "sam"
//user.welcomeMessage()

//console.log(this); //=> {}


function chai(){
    let username = "hitesh"
    console.log("Hey:" ,this.username); //=> undefined 
    //=> 'this' can not be used inside functions as written here but can be used inside objects.
    console.log(this);// dher sari chize 
}
// chai();

const coffee = function () {
    let username = "hitesh"
    console.log(this.username); //=> undefined//
}
//coffee();


//*************Arrow Function***********

const pepsi = ()=> {
    let username = "hitesh"
    console.log(this.username); //undefined
    console.log(this); //=> {}
}
//pepsi();

const addTwoNum1a = (num1, num2) => {
    return num1 + num2; //explicit return
}

// 'implicit return' in arrow function
const addTwoNum1b = (num1, num2) =>  num1 + num2; 
const addTwoNum1c = (num1, num2) => ( num1 + num2 );

const returnObj = () => ({username: "hitesh"});

console.log(returnObj());



