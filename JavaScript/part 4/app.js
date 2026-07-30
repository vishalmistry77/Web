//for loop

for(let i = 1; i <= 5; i++){ //forward loop
    console.log(i);
}
console.log("backwards");
for(let i = 5; i>= 1; i--){  //backward loop
    console.log(i);
}
//print 1 to 15 odd numbers
for(i = 1; i<=15; i += 2 ){ //or i = i +2
    console.log(i);
}
console.log("backwards");
for (let i = 15; i>=1; i -= 2){
    console.log(i);
}
//print 2 to 10 even numbers
for (let i = 2; i <= 10; i = i +2){
    console.log(i);
}
console.log("backwards");
for(let i =10; i >= 2; i = i-2){
    console.log(i);
}
//print multipication tables 
console.log("5 table loop");
for(let i=5;i<=50;i = i+5){
    console.log(i);
}
console.log("3 table loop");
for(let i=3;i<=30;i = i+3){
    console.log(i);
}

// let n = prompt("Enter your desired number:");
// n = parseInt(n); //typically this conert string into number data type

// for(let i=n; i<=n*10; i=i+n100){
//     console.log(i);
// }

//nested loops

for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

//while loop

let z = 1;
while(z<=5){
    console.log(z);
    z++;
 }

let y = 0;
while(y<=20){
    console.log(y);
    y++;
}

// favourite movie

// let favourite = "withlove";
// let guess = prompt("guess the movie");

// while(guess != favourite && guess != "quiet"){
//     console.log("wrong");
//     guess = prompt("guess the movie");
// }

// if(favourite == guess){
//     console.log("congrats!");
// } else {
//     console.log("you quit");
// }

//break keyword 
let u = 1;
while(u<=5){
    if (u == 3){
        break;
    }
    console.log(u);
    u++;
}
console.log("use break keyword at 3");

//loops in arrays
let cars = ["bmw","audi","xuv","ford"]

for(let i=0; i<cars.length; i++){
    console.log(i, cars[i]);
}

for(let i=1; i<cars.length; i = i+2){ //odd index names only
    console.log(i, cars[i]);
}

for(let i=cars.length-1; i>=0;i--){
    console.log(i, cars[i]);
}

//nested loops for arrays
let heroes = [["thor","iron-man","hulk"], ["batman","flash", "loki"]];

for(let i=0;i<heroes.length;i++){
    console.log(i, heroes[i], heroes[i].length);
    for(let j=0;j<heroes[i].length; j++){
        console.log(`j = ${j}`, heroes[i][j])
    }
}

//for of loop
//for array
let fruits = ["apple","mango","orange","grapes"];

for(fruit of fruits){
    console.log(fruit);
}
//for string
let name = "luffy";

for(char of name){
    console.log(char);
}

//nested for of loop
//using line 109 statement

for(list of heroes){
    console.log(list);
    for(items of list){
        console.log(items);
    }
}
