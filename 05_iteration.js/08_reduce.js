//***************reduce() method in array*********

const myNums = [1, 2, 3]

//way-1
const Total1 = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(Total1);

//way-2
const Total2 = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(Total2);

//Frequent UseCase
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);