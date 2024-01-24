// singleton object => is formed when we use constructor method for creating object 

//*********objects using 'new' keyword***********
const instaUser = new Object(); //Singleton Object
//console.log(instaUser); //=> {}

//*********objects using Object.create()***********
//The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
const a = {country:"India"};
const aDash= Object.create(a);
aDash.name = "adi";
//console.log(aDash);
//console.log(aDash.country);


const tinderUser = {}; //=>Non-Singleton Object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aditya",
            lastname: "Maurya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj = { obj1, obj2 } // => {obj1:{--}, obj2:{--}}

// const obj = Object.assign({}, obj1, obj2, obj4)

const obj = {...obj1, ...obj2} //spread operator
//console.log(obj);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

//console.log(users[1].email);

/*
console.log(Object.keys(tinderUser)); //=> [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //=> [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); //=> [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser); //=> { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //=> true
*/


//***********Object de-structuring***********

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);


