//this keyword
const student = {
    name: "vishal", 
    math: 75,
    phy: 77,
    bme: 65,
    eng: 77,
    getAvg() { //in object no need to write function keyword to declare a function, we can directly write the name of the function and its body
        console.log(this); //shows the whole object (student) because this keyword refers to the all current object properties and methods
        let avg = (this.phy+ this.math+ this.eng)/3; //without this keyword it cannot access the properties of the object (i.e. math, phy, eng, etc) to access we must use this keyword
        console.log(`${this.name}'s average marks is ${avg}`);
    }
}
student.getAvg(); //calling the function

//try and catch
console.log("hello1");
console.log("hello2");
let a = 5;   //if this not defined the try & catch statement will handle the error and print the message in catch block instead of throwing an error and stopping the execution of the program, it will continue to execute the next lines of code after catch block
try{
    console.log(a);
} catch(err) { //exceute only when there is an error in try block, if there is no error then catch block will be ignored
    console.log("a is not-defined");
    console.log(err); //it will print the error message in catch block  
}
console.log("hello3");
console.log("hello4");

//arrow functions

const sum = (a,b) => { //writing function in arrow function way, we can also write in normal way like function sum(a,b) { } but here we are writing in arrow function way
    console.log(a+b); 
}

sum(5,10); //calling function

//some another examples of arrow functions

const cube = (n) => { //when single arguement is there then we can also write without parenthesis() like const cube = n => { } 
    return n*n*n;
}
console.log(cube(3)); //it is returing the value of n*n*n but we are printing it in console.log, so it will print 27

const power = (x,y) => {
    return x**y;
}
console.log(power(5,3)); 

const hello = () =>{
    console.log("hello world");
}
hello(); //calling function

//arrow function (implicit return)
const mul = (a,b) =>(
    a*b
);
console.log(mul(5,5));

//setTimeout 

console.log("Hi There");

setTimeout(() =>{
    // console.log("CodeForces"); (unComment it when you use )//so this will execute after 4 seconds of executing the above line of code (i.e. console.log("Hi There");) and it will print "CodeForces" in the console after 4 seconds (Make sure to understand that it will print only one time. Means don't misunderstand that it will repeatedly print at an interval of every 4 seconds. )
},4000); //4000 means 4000ms that is 4sec

console.log("Welcome To");

//setInterval

let id = setInterval( () => {
    console.log("Hello World"); //this will print "Hello World" in the console every 2 seconds interval until we stop the execution of the program
}, 2000);//2000 means 2000ms that is 2sec

console.log(id);
clearInterval(id) //it will stop the execution of the setInterval function and it will return true if the interval is cleared successfully, otherwise it will return false

//this with arrow function
const stude = {
    name: "vishal",
    marks: 96,
    prop: this, //global scope that is window 
    getName: function () {
        console.log(this); //for this function this keyword will refer to the current object (stude) because it's a normal function and it will return the whole object (stude) when we call this function
        return this.name;
    },
    getMarks: () => {
        console.log(this); //for this arrow function this keyword will refer to the parent's scope means stude object scope is global scope that is window because arrow function doesn't have its own this keyword, it will take the this keyword from its parent scope (stude) and in stude object the this keyword refers to global scope (window) so it will return the global object (window) when we call this function
        return this.marks; 
    },
    getInfo1: function () {
        setTimeout( () => {
            console.log(this); //here this is student obejct in arrow function
        }, 2000);
    },
    getInfo2: function() {
        setTimeout( function(){
            console.log(this); //here this is window in function
        }, 2000);
    }, 
};

//practice Qs

//Qs1 to return a square of number n
// const sqar = (n) => {
//     return n*n;
// }

//or Make it shorter
const sqar = (n) => (n*n);

//Qs2  To print the "hello world" five times with an offset interval of two seconds each

let ide = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout( () => {
    clearInterval(ide);
    console.log("clear interval ran");
}, 10000); //Means after 10 seconds, five times will done(2x5). Till 10 seconds, five times will be printed, so after that it will stop the Setinterval. 


//assign Qs

// Qs1 arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
const arrayAverage = (arr) => {
    let total = 0;
    for(let num of arr){
        total = total + num;
    }
    return total / arr.length;
}
let arr = [25,25];
console.log(arrayAverage(arr)); //calling fns

//Qs2 isEven() that takes a single number as argument and returns if it is even or not
const isEven = (nu) => {
    if(nu % 2 == 0){
        return "even";
    }
    else {
        return "not even";
    }
}
console.log(isEven(59));

//Qs 3  (predict the output)
const obejct = {
    message: "Hello, World",

    logMessage() {
        console.log(this.message);
    }
};

console.log(setTimeout(obejct.logMessage(), 1000));

//Qs 4 (predict the output)
let length = 4;
function callback() {
    console.log(this.length);
}

const obj = {
    length: 5,
    method(callback) {
        callback();
    },
};

obj.method(callback, 1, 2);