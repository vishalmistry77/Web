//creating object literals
const item = {
    price: 199,
    color: ["pink", "yellow","green"],
    discount: 15,
};

//taking thread/x post as example
const post = {
    username: "@vishal",
    likes: 180,
    reposts: 15,
    content: "this my post of #100DaysOfCode",
    tags: ["#LearnInPubilc", "JavaScript"],
};

//to call the value use 2 method
//1. string method
console.log(post["username"]);
//this calling the value after defineing only possible in string method not dot
let pre = "reposts";
console.log(post[pre]);

//2.dot method
console.log(post.tags[0]);
console.log(post.likes);

//add or update value 
const student = {
    name: "Alice",
    age: 20,
    grade: "A",
    city: "Delhi",
};
console.log(student.age = 18);
console.log(student.city = "Mumbai");
console.log(student.gender = "male");
console.log(student.marks = [90, 85, 92]);
console.log(student);

//for delete value
delete student.grade;
console.log(student);


//nested object
const info = {
    vishal : {
        age: 18,
        city: "Mumbai",
    },
    ayush : {
        age: 18,
        city: "Pune",
    },
    gracy : {
        age: 20,
        city: "Surat",
    },
    diya : {
        age: 19,
        city: "Ahmedabad",
    }
}
console.log(info.gracy);
console.log(info.vishal.city);

//arrays of objects
const classInfo = [
    {
        name : "Alice",
        grade : "A",
        city : "Delhi",
    },
    {
        name : "Bob",
        grade : "B",
        city : "Mumbai",
    },
    {
        name : "Charlie",
        grade : "C",
        city : "Chennai",
    }
]

console.log(classInfo[0].name); 
console.log(classInfo[1].grade);

console.log(classInfo[1].age = 18); //add new key value pair in array of object
console.log(classInfo[2].city = "Pune"); //update value in array of object

//math object

console.log(Math.abs(-5)); //absolute value
console.log(Math.PI); //or E at place of PI 
console.log(Math.sqrt(16)); //square root
console.log(Math.pow(2, 3)); //2 to the power of 3
console.log(Math.random()); //mostly used for generate random number between 0 and 1 and 1 is exclusive

//random number between 0 and 10

let step1 = Math.random() *10
console.log(step1); //this will give you random number between 0 and 10 but it can be decimal number
let step2 = Math.floor(step1);
console.log(step2); //this will give you random number between 0 and 9

//shorter way
console.log(Math.floor(Math.random() * 10)); //this will give you random number between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); //this will give you random number between 1 and 10

//PRACTICE QUESTIONS

console.log(Math.floor(Math.random() * 100) + 1); //random number between 1 and 100
console.log(Math.floor(Math.random() *5) + 1); //between 1 and 5
console.log(Math.floor(Math.random() * 5) + 21); //between 21 and 25, can also genrate between specfic number by changing some value in formula 

//guessing games (uncomment when use it)

// const max = prompt("Enter the maximum number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess the number");

// while (true) {
//     if (guess == "quit") {
//         console.log("You Quit");
//         break;
//     }

//     if(guess == random) {
//         console.log("You're right , the number was ", random);
//         break;
//     } else if(guess < random) {
//         guess = prompt("hint: Too low! Do again");
//     } else {
//         guess = prompt("hint: Too high! Do again");
//     }
// }