// Qs1

let num = 0;

if (num%10 == 0 && num != 0){
    console.log("good");
} else {
    console.log('bad');
}

// Qs2

// let Name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// alert(`${Name} is ${age} years old.`);


//Qs3

let quarter = 4;
switch(quarter){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4: 
        console.log("October,November,December");
        break;
    default:
        console.log("Enter your quater properly!");
}

//Qs 4
let str = "ARLNOLD";

if ((str[0] == 'a' || str[0] == 'A') && str.length >= 5 ){
    console.log("this is golden string");
} else {
    console.log("it is not golden string");
}

//Qs5 

let a = 5;
let b = 30;
let c = 70;

if(a > (b && c)){
    console.log("a is greater");
} else if ( b > (a && c)) {
    console.log("b is greater");
} else {
    console.log("c is greater");
}

//Qs6 

let num1 = "56";
let num2 = "756";

if(num1%10 == num2%10){
    console.log("last number is same which is", num1%10);
} else {
    console.log("last number is not same");
}