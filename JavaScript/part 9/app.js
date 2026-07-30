//getElementByClassName

let smallImages = document.getElementsByClassName("oldImg");

for(i=0; i<smallImages.length; i++) {
    console.dir(smallImages[i]); //returns an array of all the elements with the class name "oldImg"
      console.dir(smallImages[i].src); //returns the source of the image
}
// for (i=0; i<smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image ${i} is changed`);
// }

//getElementByTagName (Selecting a particular tag like paragraph tag or list tag from index.html and applied on all <p> or <li>)
//see img

//querySelector

console.dir(document.querySelector("p"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a")); //selecting the first anchor tag inside the div tag

console.dir(document.querySelectorAll("div a")); //selecting all the anchor tags inside the div tag and returns a node list

//manipulating style

let links = document.querySelectorAll(".box a"); //changing the color of all anchor tags inside the div with class name "box"

for (link of links) {
  link.style.color = "red";
}

//OR
// for(i = 0; i<links.length; i++) {
//   links[i].style.color = "red";
// }