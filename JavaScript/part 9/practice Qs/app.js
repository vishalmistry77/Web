//practice Qs

let para1 = document.createElement("p");
para1.innerText = "hey, i am red";
document.querySelector("body").append(para1);

para1.classList.add("red"); //adding red color via classlist

let h3 = document.createElement("h3");
h3.innerText = "I am a blue h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue"); // adding blue color via classslist

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "i'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("div");

document.querySelector("body").append(div);


//assignment Qs

let btn = document.createElement("button");
let input = document.createElement("input");
btn.innerText = "Click Me";
document.querySelector("body").append(btn);
document.querySelector("body").append(input);

