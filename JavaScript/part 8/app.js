//foreach

//function method
let arr = [1, 2, 3, 4, 5];
console.log("with function");
// let print = function(el) {
//     console.log(el);
// }
// arr.forEach(print);

//OR
arr.forEach(function(el){
    console.log(el);
})

//with arrow functtion
console.log("with arrow function");
let print = (el) => {
    console.log(el);
}
arr.forEach(print);

//for objects forEach method
let obs = [{
    name: "vishal",
    marks: 85
},
 {
    name: "harshit",
    marks: 98
 }, 
 {
    name: "fahim",
    marks: 78
 }];

obs.forEach((students) => {  //with arrow methods
    console.log(students);
});
obs.forEach(function(students) {  //with function methods
    console.log(students.marks);
});

//map

let gpa = obs.map((el) => { //with object example (obs refers to the above object)
    return el.marks/10;
});
console.log(gpa);

let num = [1, 2, 3, 4];
let double = num.map((el) => { //with array example
    return el * el;
});
console.log(double);

//filter

let nums = [1,2,3,4,5,10,6,7,8,9];

let even = nums.filter((ev) => {
    return ev % 2 == 0; //even -> true odd -> false
});
console.log(even);

let divby5 = nums.filter((el) => {
    return el % 5 == 0; //divided by 5 number only come in new arr
});
console.log(divby5);

//every

let odd = nums.every((el) => {
    return el % 2 ==0;
});
console.log(odd);

//reduce method

//using num of line 51
let finalVal = num.reduce((res, el) => res + el);
console.log(finalVal);

//OR
console.log("for understanding each step how it calculate");
let finalVa = num.reduce((res, el) => {
    console.log(res);
    return res + el;
});
console.log(finalVa);

//practice Qs find maximum in an array (dryrun both methods to understand it better)

//using nums of line 59 (with reduce method)
let result = nums.reduce((max,el) => {
    if(el>max) {
        return el;
    }
    else {
        return max;
    }
});
console.log(result);

//using nums of line 59 (with loop method)
let max = -1
for(i=0; i < nums.length; i++) {
    if(max <nums[i]) {
        max = nums[i];
    }
}
console.log(max);

//Practice Qs

//Check all numbers in the array are multiples of 10 or not. 
let tens = [10,20,30,40,50,5];

let divTen = tens.every((el) => {
    return el % 10 == 0;
})
console.log(divTen);

//Create a function to find a minimum in an array.
function getMin(nums) {
    let res = nums.reduce((min, el) => {
    if(el>min) {
        return min;
    }
    else {
        return el;
    }
});
    return res;
}
console.log(getMin(nums)); //uses the line 59 array

//default parameters

function sum(a, b = 2) {
    return a+b;
}
console.log(sum(1,4)); //return 5
console.log(sum(1)); // here it assume a=1, b = 2 cuz b is defined as default parameter in fns


//spread 
let arrs = [1,2,3,4,5];
let newArr = [...arrs];
console.log(newArr);

let chars = [..."hello"];
console.log(chars);

let odds = [1,3,5,7];
let evens = [2,4,6,8];

let both = [...evens, ...odds];
console.log(both);

//spread with objects

const data = {
    email: "ab@gmail.com",
    password: "abc"
};
console.log(data);
const dataCopy = {...data, id: 123, country: "India"}; //After spread data, we add more properties in objects also. 
console.log(dataCopy);

//using 148 line
let obj1 = {...arrs}; //converts from array to objects. So key: val pairs are created. Here key is index and value is element of array.
let obj2 = {..."hello"}; //for strings. here also key is index and value is character of string.
console.log(obj1);
console.log(obj2);

//rest

function sum(...args) {
    for(i=0; i<args.length; i++) {
        console.log("you gave us:", args[i]);
    }
}
console.log(sum(1,2,3,6,54,95,6)); //it will print all the arguments we passed in the function. Here we use rest operator to get all the arguments in an array form. So we can use loop to print all the arguments.

function min(msg, ...nums) {
    console.log(msg);
    let res = nums.reduce((min, el) => {
        if(el>min) {
            return min;
        }
        else {
            return el;
        }   
    } );
    return res;
}

console.log(min("the minimum is:", 1,2,3,4,5,6)); //here "the minimum is" stored in msg. Here we use rest operator to get all the numbers in an array form. So we can use reduce method to find the minimum number

// function mini() { //Uncomment it when use
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }
// console.log(mini(1,2,3,5,3)); 
//in arguments we get all the arguments in an array like object form. But we cannot use array methods on it. So we cannot push new element in it. It will give error. So we use rest operator to get all the arguments in an array form and then we can use array methods on it.

//destructuring

let names = ["tony", "peter", "hulk", "cally", "steve", "bruce"];
// let winner = names[0];
// let runnerup = names[1];
// let runnerup2 = names[2]; //assigning the varibales Individually by index

//OR
let [winner, runnerup, runnerup2, ...remaining] = names; //here we use remaining as rest operator to get all the remaining elements in an array form. So we can use loop or any array method on it.
console.log(winner);
console.log(runnerup);
console.log(runnerup2);
console.log(remaining); 

//destructuring (for objects)

const students = {
    name: "abhimanyu",
    age: 15,
    class: 10,
    subjects: ["ss", "science", "maths", "english"],
    username: "shika@123",
    password: "abcd",
};
// let username = students.username;
// let password = students.password; //normal way to get the values of username and password from the students object

//OR
let{ username, password: secret, Dob = "18THMAY", place: myLocation = "Mumbai"} = students;
console.log(username);
console.log(secret);
console.log(Dob); // We also use default parameters to assign default values to Dob and place in case they are not present in the students object. If present then it will take the value from the students object otherwise it will take the default value we assigned. 
console.log(myLocation); //here we use destructuring to get the values of username and password from the students object. We also use aliasing to rename the password variable to secret.