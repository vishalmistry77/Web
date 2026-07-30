//trim method (igrone whitespace except if it is in the middle of the word)

// let pass = prompt("enter your password");
// let newpass = pass.trim()
// console.log(newpass); 

//upper & lower cases
let name = "Vishal Mistry";
let msg = "Error";

console.log(msg.toUpperCase());

//indexOf 

let chat = "IloveCoding";

console.log(chat.indexOf("o")); //tells index number first occurance
console.log(chat.indexOf("Z")); //gives -1 (not exist)

//chaining method

let mesg = '  hello  ';
// let newmesg = mesg.trim();
// console.log("after trim:",newmesg);
// newmesg = newmesg.toUpperCase();
// console.log("after uppercase:",newmesg);  
                //OR

//inseated of Writing three to four lines of code use method chaining 
let newmesg = mesg.trim().toUpperCase();
console.log(newmesg); 

//slice

let dm = "IloveCoding"; //total 10indexes 
console.log(dm.slice(5,11)); // The "end" index is NOT included in the result! e.g if have to print till coding g is 10 but at end you must write 10+1 = 11
console.log(dm.slice(5)); //if Starting is given then it will go up till the last dm.length
console.log(dm.slice(-1)); // total -1 = 11-1=10 means g

//replace
console.log(dm.replace("love", "do"));
console.log(dm.replace('o', 'x'));
let string = "apnaapnaapna";
console.log(string.replace("apna", "college")); //collegeapnaapna  (He just replaced the first encounter word particularly argument not Every word in loop ) 
//repeat
console.log(dm.repeat(3));


//practice Qs
//1
let call = "help!";
console.log(call.trim().toUpperCase());
//2
let stri = "ApnaCollege";
console.log(stri.slice(4, 9)); //Colle 
console.log(stri.indexOf("na")); //2 (2nd postion of index)
console.log(stri.replace("Apna", "Our"));
//3
console.log(stri.slice(4).replace('l', 't')); //Cotlege but we can try
console.log(stri.slice(4).replace('l', 't').replace('l', 't')); //Cottege

//arrays

let students = ["vishal", "ayush", "harry"];
console.log(students[1]); 
console.log(typeof students);

let info = ["vishal", 18 , 15.8]; //mixed arrays (JS Support multiple data types in array)
console.log(info);
console.log(info.length);
console.log(info[0][0]); // It tells first the position 0 position of index and in that character zeroth position like vishal and V is at zero index
console.log(info[0].length); //tells number of length of first item in array

let emArr = []; //empty array
console.log(emArr);
console.log(emArr.length);

//arrays method

let cars = ["bmw", "audi", "toyota"];

//push method
console.log(cars);
console.log(cars.push("xuv"));
console.log("after push:", cars);

//pop method
console.log(cars);
console.log(cars.pop());
console.log("after pop:", cars);

//unshift method
console.log(cars);
console.log(cars.unshift("maruti"));
console.log("after unshift:", cars);

//shift method
console.log(cars);
console.log(cars.shift());
console.log("after shift:", cars);

//real-life Scenario of Array method
// In instead if we block someone Then it will be automatically removed from our follower list
let followers = ['a','b','c','d'];
// Here Block and unfollow user 'a' For e.g
let blocked = followers.shift();
console.log("follower:", followers);
console.log("blocked:", blocked);


//practise Qs
let months = ["January", "July", "March", "August"];
console.log(months.shift());
console.log(months.shift());
console.log(months);
console.log(months.unshift("June"));
console.log(months.unshift("July"));
console.log(months);

//indexOf method

console.log(months);
console.log (months.indexOf("March"));
console.log (months.indexOf("march")); //-1 cuz m is capital so it is not found

//includes method
console.log (months.includes("March")); //true->found
console.log (months.includes("march")); //false-> not found

//concatenation method
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];
let allColors = primary.concat(secondary); // Bond secondary first then write secondary.concat(primary)
console.log(allColors); //it will make changes in new arrays pri and sec arrays don't change

//reverse method
console.log(primary.reverse()); // Make changes in original array itself

//slice array
console.log(allColors);
console.log(allColors.slice(2,3)); //end index is note included
console.log(allColors.slice(-2));
console.log(allColors.slice(10)); //if invalid index value written it will gave empty array

//splice method (use image stored in this file)

//sort in array
let days = ["monday","friday", "saturday","thursday"];
console.log(days.sort()); // Arrange the elements in  acending order but this method cannot apply in numbers

//practice Qs

//Qs1
let month = ["January", "July", "March", "August"];
console.log(month.splice(0,2,"july", "june"));
console.log(month);

//Qs2 Return the index of javascript from the given array if it was reversed
let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse().indexOf("javascript"));

//Arrays referances

let arr = ['a', 'b', 'c'];
let arrCopy = arr;
console.log(arr.push('d'));
console.log(arrCopy); //see the changes are applied in this array also therfore arr == arrCopy
//now we change arrCopy
console.log(arrCopy = ['a', 'b', 'c'])
console.log(arr.push('d'));
console.log(arrCopy);
console.log(arr); // Now both arrays are different because you change the address

//nested arrays
let arrays = [[1,2],[2,3],[3,4]];
console.log(arrays);
console.log(arrays.length);
console.log(arrays[0].length);
console.log(arrays[0][1]); //2
console.log(arrays[2][0]); //3

//practise Qs (tic-tac-tao game)
let game = [['x',null,'o'], [null,'x',null],['o',null,'x']];
console.log(game);
//extra Qs if you want to change the null in 'o'
game[0].splice(1,1,'o');
//OR game[0][1] = 'o';
console.log(game);

//assignment Qs

//Qs1
let array1 = [7,9,0,-2];
let n1 = 3;
console.log(array1.slice(0,3));

//Qs2
let array2 = [7,9,0,-2];
let n2 = 3
console.log(array2.slice(array2.length-n2));

//Qs3
//let str = prompt("enter the string");

//if(str.length == 0){
   // console.log("string is empty");
//} else {
    //console.log("string is not empty");
//}

//Qs4
//let char = prompt("enter char");
let idx = 3;

//if(char[idx] == char[idx].toLowerCase){
    console.log("it is lower case");
//} else {
    console.log("it is uppercase");
//}