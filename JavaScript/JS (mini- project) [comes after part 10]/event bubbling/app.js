//event bubbling (it often occur this problem in nested elements. When we click ul it will also trigger it's parent element. Like 2 event will trigger while we just click ul not div{parent} )

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function(event) {
    console.log("div was clicked");
});
ul.addEventListener("click", function(event) {
    event.stopPropagation(); //to stop the event bubbling, this will not allow to trigger the parent element
    console.log("ul was clicked");
});
for(li of lis){ //cuz their are multiple li's
li.addEventListener("click", function(event) {
    event.stopPropagation(); 
    console.log("list was clicked");
});
}
