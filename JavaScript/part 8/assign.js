//Qs 1 Square and sum the array elements using the arrow function and then find the average of the array

let arre = [1, 2, 3, 4, 5, 6];

let sums = arre.reduce((res,el) => {
    return res + el;
});
let sq = arre.map((el) => {
    return el * el;
});

let avg = sums / arre.length;
console.log(avg);

//Qs2 Create a new array using the map function whose each element is equal to the original element plus5

let plus5 = arre.map((el)=> {
    return el + 5;
});
console.log(plus5);

//Qs3 Create a new array whose elements are in uppercase of words present in the original array.

let low = ["hello", "hii", "whatsup"];

let uprcase = low.map((el)=>{
    return el.toUpperCase();
});
console.log(uprcase);

//Qs4 Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v*2),
];

console.log(doubleAndReturnArgs([1,2,3,6,5,8], 5, 9));

//Qs5 Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

console.log(mergeObjects({1:2,2:3}, {5:6,7:9}));