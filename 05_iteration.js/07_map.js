//***************map() method in array*********
const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNums = Nums.map( (num) => { return num + 10})
//console.log(newNums);

//***************Concept of Chaining
const newNums = Nums
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

