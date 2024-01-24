//Variables declared with 'var' can have a global or local scope
var a = 500;

//Variables declared with 'let' and 'const' can have a global, local, or block scope
let b = 700;
const c = 900;

if (true) {
    var a =50;
    let b = 70;
    const c = 90;   
    console.log("INNER console a: ", a);
    console.log("INNER console b: ", b);
    console.log("INNER console c: ", c);
    
}

console.log("Outer console a: ", a); //=> 50 (disadvantage of using var)
console.log("Outer console b: ", b); //=>700
console.log("Outer console c: ", c); //=> 900


function one(){
    const username = "hitesh "

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); => ReferenceError => website is not defined

     two()

}

//one()


//++++++++++++++++++Concept of Hoisting+++++++++++++++++++

console.log(v1); //=> undefined
var v1 = 101;

//console.log(lt1); //=> ReferenceError: Cannot access 'lt1' before initialization
let lt1 = 102;

//console.log(cnst1); //=> ReferenceError: Cannot access 'cnst1' before initialization
const cnst1 =103;


console.log(addone(5))
function addone(num){
    return num + 1
}

//*****function expression******
//addTwo(5) => ReferenceError : Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}

/*Function expressions in JavaScript are not hoisted, unlike function declarations. You can't use function expressions before you create them.*/
