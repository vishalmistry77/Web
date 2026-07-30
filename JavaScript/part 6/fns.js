function hello() {
    console.log("Hello");
} 
hello(); //calling function

function num1to5() {
    for(i=1; i<=5; i++){
        console.log(i);
    }
}
//calling loop function
num1to5();
num1to5();

function isAdult() {
    let age = 19;
    if(age >= 18){
        console.log("Adult");
    } else {
        console.log("not Adult");
    }
}
isAdult();//calling conditional statement function
//so with help of function we don't need to write code everytime just call it

//to print a small poem
function printPoem() {
    console.log("Despite the storms, beauty arrives like it was always going to. Despite the darkness,");
}
printPoem();

//to roll dice from 1 to 6
function rollDice() {
    let dice = Math.floor(Math.random() * 6 ) + 1;
    console.log(dice); 
} 
rollDice();
rollDice();

//function with arguements
function printName(name) {
    console.log(name);
} 
printName("Vishal");

//with 2 arguements
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}
printInfo("vishal", 20);

//sum of 2 numbers 
function printSum(a,b) {
    console.log(a+b);
}
printSum(6,7);

//finding average of 3 numbers
function avgof3(x,y,z) {
    let avg = (x+y+z)/3
    console.log(avg);
}
avgof3(5,5,5);

//find a multiplication of table
function numTable(j) {
    for(i = 1; i<=10; i++){
        let mult = i*j;
        console.log(mult);
    }
}
numTable(10);

//return function
function add(a,b) {
    return a+b;
}
console.log(add(5,6)); //can't use return value without console.log() or storing it in a variable

function summ(a,b) {
    console.log("Hello");
    console.log("Hello");
    return a+b;
    console.log("Hello"); //anything after return statement will not be executed
}
console.log(summ(summ(5,6), 5)); //hack to find the sum of 3 numbers using only 2 arguements in function

function isAdult(age) {
    if(age>=18){
        return "adult";
    } else {
        return "not-adult";
    }
}
console.log(isAdult(21));

//to print sum from 1 to n
function toN(n) {
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(toN(5));

//to concat all strings of arrays
let str = ["luffy", "zoro", "sanji", "chopper"];

function allStrings(str) {
    let result = "";
    for(i=0; i<str.length; i++) {
        result = result + str[i];
    }
    return result;
}
console.log(allStrings(str));

//scopes

let sum  = 54; //global scope

function calSum(a,b) {
    let sum = a+b; //function scope (valid only inside the function)
    console.log(sum);
}
calSum(1,2);

for(i=0; i<=5; i++){
    console.log(i); //block scope (so i is only accesible inside in {} not outside)
}

function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        console.log(x); //lexical scope 
        console.log(y);
    }
    outerFunc();
}
function outerFunc() {
    let x = 5;
    let y = 6;

    function innerFunc() {
        console.log(x);
        console.log(y);
    }
 innerFunc();
}
outerFunc();

//practice Qs of scope
let greet = "hello"; //global scope
function changeGreet() {
    let greet = "namaste"; //function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet); //lexical scope
    }
    innerGreet();
}
console.log(greet); //outer greet means global variable outside the function
changeGreet(); //inner one can access outer variable but outer one can't access inner variable

//function expression (nameless function)

const summds = function(a,b) {
    return a+b;
}
summ(5,6);

let hellos = function() {
    console.log("Hello");
}
hellos();
hellos = function() {
    console.log("namaste"); //here we change the name of function and it will work because it's a function expression not declaration
}
hellos();

//higher order function 
function multiplegreet(func,n) { //higher order functions
    for(let i = 1; i<=n; i++){
        func();
    }
}
let gret = function() {
    console.log("Hello");
} 
multiplegreet(gret, 10); //just mention how many times you want to print the function and it will call the function that many times, don't need to call the function again and again
//OR multiplegreet(function() {console.log("Hello");} , 10);   same answer but without storing the function in a variable


//higher order functions (returns)
function oddEvenTest(request) {
    if(request == "odd"){
        return function(n) {
            console.log(!(n%2 == 0));
        }
    } else if (request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("Invalid request");
    }
}
 let request = "odd";
//see from image how output is been used to call this function

//methods

const calculator = {
    num: 55,
    add: function(a,b){
        return a+b;
    }, 
    mult: function(a,b){
        return a*b;
    }, 
    sub: function(a,b){
        return a-b;
    }, 
};
//methods shorthand
const calc = {
    add(a,b) {
        return a+b;
    },
    sub(a,b) {
        return a-b;
    }
};