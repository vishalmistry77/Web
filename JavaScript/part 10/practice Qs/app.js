
let newB = document.createElement('button');
newB.innerText = "Click Me";
console.dir(newB);

let body = document.querySelector("body");
body.appendChild(newB)

let p = document.querySelector("button");

p.addEventListener("click", function() {
    console.log("Color changed to green");
    p.style.backgroundColor = "lightgreen";
});

let ip = document.querySelector("input");
let h2 = document.querySelector("h2");

ip.addEventListener("input", function() {
    let name = ip.value;
    // Keep only letters (A-Z, a-z) and spaces
    name = name.replace(/[^a-zA-Z ]/g, ""); //see the meaning of this line in AI
    // Update the input field
    ip.value = name;
    // Display the name in the h2
    h2.innerText = name;
});