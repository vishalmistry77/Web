//onclick and onmouseover events
let btns = document.querySelectorAll("button");
console.dir(btns);

for(btn of btns) {
    btn.onclick = sayHowareYou; //make sure don't add () to the function name, otherwise it will call the function immediately
    btn.onmouseenter = function() { //when the mouse hovers over the button, this function will be called that is onmouseover
        console.log("you hovered over a button");
        }
    function sayHowareYou() {
        alert("How Are You");
    }
}

//event listener

for(btn of btns) {
    // btn.onclick = sayHello; 
    // btn.onclick = sayName; //this both onclick is their then one will only execute, so only sayName will be called. disadvantege of using this method onclick. Therefore we are using event listeners

    // btn.addEventListener("click", sayHello); 
    // btn.addEventListener("click", sayName); // So here now both function will execute
    btn.addEventListener("dblclick", function() { //use both click and double click event listener sepearately comment and uncomment to see the effect
        console.log("you double clicked");
    });

function sayHello() {
    alert("Hello");
    }
function sayName() {
    alert("APna College");
    }
}

//event listener for elements other than button

let p = document.querySelector("p");

p.addEventListener("click", function () {
    console.log("para is clicked");
});

//here on clicking the div changes it color randomly
let box = document.querySelector("div");

box.addEventListener("click", function () {
    let randomC = randcolor();
    box.style.backgroundColor = randomC;
});

function randcolor() {
    let red = Math.floor(Math.random() * 255); //no need for +1 because it is stared from 0
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

//this in event listener
let h2 = document.querySelector("h2"); //same this you try on any element like button, etc.

h2.addEventListener("click", function() {
    console.dir(this); //this will point towards h2 in o/p console 
    console.dir(this.innerText); //it will point towards innerText in console
    this.style.backgroundColor = "yellow"; //whenever i click the h2 so this will point towards h2 and change its color
})

// If we have to perform same task in multiple object or element then we can use This approach For making code Optimize

let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let h5 = document.querySelector("h5");

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
}

h5.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
h4.addEventListener("click", changeColor);