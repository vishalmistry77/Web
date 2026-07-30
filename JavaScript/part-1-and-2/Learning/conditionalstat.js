//if statement
console.log("before if statement");
let agee = 17;
if (agee >= 18){
    console.log("you can vote");
    console.log("you are no longer minor anymore");
}
console.log("after if statement")
if (agee < 18){
    console.log("you are considered minor");
    console.log("you cannot vote");
}

let firstName = "Vishal";
if (firstName == "Vishal"){
    console.log(`Welcome ${firstName}!`);
}

//practice Qs
let trafficLight = "Yellow";
if (trafficLight == "Red"){
    console.log("Stop!");
}
if (trafficLight == "Yellow"){
    console.log("Slow Down");
}
if (trafficLight == "Green"){
    console.log("Go");
}

//else if
let marks = 33;
if(marks >= 90){
    console.log("A+");
} else if (marks >=80){
    console.log("A");
} else if (marks >= 33){
    console.log("C");
} else if (marks < 33){
    console.log("Fail");
}

//else statement
let color = "Blue";
if (color == "Red"){
    console.log("Stop!");
} else if (color == "Yellow"){
    console.log("Slow Down");
} else if (color == "Green"){
    console.log("Go");
} else {
    console.log("Traffic light is broken");
}

//Practice Qs
let popcornSize = "7"
if (popcornSize == "XL"){
    console.log("Price is 250 rupees");
}else if (popcornSize == "L"){
    console.log("Price is 200 rupees");
}else if (popcornSize == "M"){
    console.log("Price is 100 rupees");
}else {
    console.log("Or you can take smaller one of price is 50 rupees!");
}

//nested if else statements

let Marks = 72;
if (Marks >= 33){
    console.log("Pass");
    if(Marks >= 80){
        console.log("O");
    } else{
        console.log("A");
    }
} else {
    console.log("better luck next time!");
}

//logical operator

// && operator
let score = 49;
if(score >= 50 && score <= 100){ //for && both should be true to excute
    console.log("You perform well");
} else{
    console.log("You didn't done enough");
}

// || operator
let helo = 56;
if (helo >= 33 || helo >= 80 ){ //for || anyone expression should be true to excute
    console.log("Pass");
    console.log ("A")
}

// ! operator
!(5 > 3)
//false (try in console itself)

//multilpe operators 
let mae = 23;
if ((mae < 33 && mae >= 80) || !(false)){ //code with excute from Left to Right in case of Multiple operators
    console.log("Pass"); //true
}

//practice Qs
let str = "ashish";
if ((str[0] === 'a') && (str.length > 3)) {
    console.log("It is good string");
} else {
    console.log("it is not good string");
}

let num = 12;

if ( (num%3 === 0) && ((num+1 ===15) || (num-1 == 11)) ){
    console.log("safe")
} else {
    console.log("unsafe");
}

//truthly & fasly
if(true){
    console.log("it is true sentance");
} else {
    console.log("it is false sentance");
}

//switch statement
let day = 7;

switch(day){
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log(" Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default:
        console.log("wrong day");
        break;
}

//alert 
    // alert("something is wrong!");  

console.warn("this is warning."); 
console.error("this is error!");
//see changes of this two in console section


//prompt
let naame = prompt("Enter your first name:");
let lastname = prompt("Enter your last name");
let msg = `Hello ${naame} ${lastname} !`;
alert(msg);