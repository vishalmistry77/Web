//for default event object in callback under () brackets and observe the event object in console and explore the properties of event object

let btn = document.querySelector("button");

btn.addEventListener("click", function (event) { //click on button and see the event object in console and explore the properties of event object
    console.log(event);
    console.log("button was clicked");
});

btn.addEventListener("dblclick", function (event) { //double click on button and see the event object in console and explore the properties of event object
    console.log(event);
    console.log("button was double clicked");
});


//keyboard events
const inp = document.querySelector("#name");

inp.addEventListener("keydown", function (event) { //press any key(including space, arrows keys all are count) and see the event object in console
    console.log(event); //observe the event object in console and explore the properties of event object and most importantly properties like code and key which are very useful in keyboard events. 
    console.log("key = ", event.key); //also see with . function also with getting into the event object properties 
    console.log("code = ",event.code);
    console.log("key was pressed");
});  //same for "keyup" when the key is pressed and released then event is fired 


//this a game based mini-project and use case of keyboard events
const input = document.querySelector("#game");

input.addEventListener("keydown", function(event) {
    console.log("code = ", event.code); //ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    if(event.code == "ArrowUp") {
        console.log("character moves forward");
    }
    else if(event.code == "ArrowDown") {
        console.log("character moves backward");
    }
    else if(event.code == "ArrowRight") {
        console.log("character moves right");
    }
    else if(event.code == "ArrowLeft") {
        console.log("character moves left");
    }
    else {
        console.log("press an arrow key in the game input");
    }
});


//form event

let form = document.querySelector("#f1");

form.addEventListener("submit", function (event) {
    event.preventDefault(); //this is use to cancel the default action and the action in form tag is to submit the form and reload the page but we are preventing it and we can do our own action in the callback function. so here we don't go to action url
    alert("form submitted");
});

//extracting form data

let form2 = document.querySelector("#f2");

form2.addEventListener("submit", function (event) {
    event.preventDefault(); 

    let inp = document.querySelector("#f2 input");
    console.dir(inp); //see the value property of input element in console and also see the other properties.
    console.log(inp.value); //here in input element innerText is not used because input element is self closing tag and it doesn't have any inner text so we use value property to get the value of input element.
});
//example taking user and password and print it in console. more for advance we can link it with database(but not now in future)
let form3 = document.querySelector("#userForm");

form3.addEventListener("submit", function (event) {
    event.preventDefault();
    console.dir(form3); //see elements property in it

    let user = document.querySelector("#user"); //OR let user = this.elements[0];
    let pass = document.querySelector("#pass"); //OR let pass = this.elements[1]; //both of them have same use case

    console.log("user = ", user.value);
    console.log("pass = ", pass.value);

    alert(`the is user is ${user.value} and password is set as ${pass.value}`);
});

//mouseout event 
form3.addEventListener("mouseout", function() {
    console.log("mouse is out");
});

//change event

let user = document.querySelector("#user");

user.addEventListener("change", function() {
    console.log("change event");
    console.log("final value =", this.value); //the change event fired when the value is changed . it is trigger when we click anywhere not only in button but anywhere in the document. so we can use this.value to get the value of input element when the change event is fired.
});

//input event

user.addEventListener("input", function() {
    console.log("input event");
    console.log("final value =", this.value); //same as change but it track every change happend in value
});

//small activity for input & change event (this way we can track the every change happen it text editor.)

let ip = document.querySelector("#editor");
let p = document. querySelector("#para");

ip.addEventListener("input", function () { //input event that tracks every small changes
    console.log(ip.value);
    p.innerText = ip.value;
});

//keypress event

let po = document.querySelector("#parrr");
let ipu = document.querySelector("#sample");

ipu.addEventListener("keypress", function(event) {
    po.innerText = `you pressed ${event.code}`;
    console.log(event.code);
});

//scroll event

window.addEventListener("scroll", function() { //the event will attach with window cuz the whole page is scrolling.
    console.log("You are scrolling");
});

//load event

window.addEventListener("load", function() {  //The function runs once after the entire page (HTML, images, CSS, etc.) has finished loading.
    console.log("Page loaded successfully");
});