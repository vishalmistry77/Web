let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let ip = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = ip.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
    ip.value = ""; //resets the input box after the button is clicked(after added to task)
});

ul.addEventListener("click", function(event) {
    console.log(event.target.nodeName); //it shows on which btn it was clicked and the node name says which was clicked li or button specifically 
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});


// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove(); //delete the parent of .delete class which is li
//     });
// }


//FOR UNDERSTANDING THE CONCEPT OF EVENT DELEGATION USE THIS PROMPT TO GPT

// ul.addEventListener("click", function(event) { console.log(event.target.nodeName); //it shows on which btn it was clicked and the node name says which was clicked li or button specifically if (event.target.nodeName == "BUTTON") { let listItem = event.target.parentElement; listItem.remove(); console.log("deleted"); } }); // let delBtns = document.querySelectorAll(".delete"); // for(delBtn of delBtns) { // delBtn.addEventListener("click", function() { // let par = this.parentElement; // console.log(par); // par.remove(); //delete the parent of .delete class which is li // }); // } Explain to me why the first snippet of code is good and the second one is not good for a to-do app in which there is an event delegation problem.