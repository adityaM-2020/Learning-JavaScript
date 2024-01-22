
let ohk = new Date( 2023, 11, 25, 23, 5, 23, 500);
// console.log(ohk);
// console.log(`typeof(ohk) is : ${typeof(ohk)}`);
// console.log("**********************");
// console.log(ohk.toString());
// console.log(ohk.toDateString());
// console.log(ohk.toTimeString());
// console.log("**********************");
// console.log(ohk.toLocaleString());
// console.log(ohk.toLocaleDateString());
// console.log(ohk.toLocaleTimeString());


let myTimeStamp = Date.now()
//console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1); //month starts with 0 
// console.log(newDate.getDay());
//console.log(newDate.getTime());
console.log(newDate.toLocaleString('default', {
    weekday: "long"  
}));






