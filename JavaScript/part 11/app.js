//understanding the call stack

function hello() {
    console.log("inside hello fns");
    console.log("hello");
}

function demo() {
    console.log("calling hello fns");
    hello();
}

console.log("calling demo fns");
demo();
console.log("Done");

//visualizing the call stack through  a problem

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();

//callback hell

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    setTimeout(() => {
        h1.style.color = color;
    }, delay);
}

changeColor("orange", 1000);
changeColor("blue", 2000);
changeColor("green", 3000); //we have to accept that all three are Independent, but we want all colors in the same sequence, meaning after orange, then only blue should come. If orange is not there, then blue should also not come. So we have to make sure that all three colors are dependent on each other. So we can do this by using callback hell as shown in below another example

let h2 = document.querySelector("h2");

function changeColor2(color, delay, nextchangeColor) {
    setTimeout(() => {
        h2.style.color = color;
        if(nextchangeColor) nextchangeColor();
    },delay);
}

changeColor2("red", 1000, () => {
    changeColor2("springgreen", 1000, () => {
        changeColor2("pink", 1000, () => {
            changeColor2("aqua", 1000); //therefore, we have to use callback hell to make sure that all three colors are dependent on each other. So we can do this by using callback nesting = callback hell. But this is not a good practice because it makes the code very messy and hard to read. 
        });
    });
});

//another example of callback hell

function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();  //IF SPPEED IS GOOD THEN SUCCESS WILL BE CALLED 
    } else {
        failure(); //IF SPEED IS BAD THEN FAILURE WILL BE CALLED
    }
}

savetoDb(
    "hii", 
    () => {
        console.log("success: data saved successfully");
            savetoDb(
                "hello", //means if first data hii is successfully stored then only 2nd data hello will store by calling savetoData() this is known as callback hell/nesting
                () => {
                    console.log("success2: data saved successfully");
                    savetoDb(
                        "Vishal",  //again another callback. this will run sequentially if 1 run then only another 2 will run 
                        () => {
                            console.log("success3: data saved successfully");
                        },
                        () => {
                            console.log("failure3: data not saved weak connection");
                        });
                    },
                () => {
                    console.log("failure2: data not saved weak connection");
                });
            }, 
    () => {
        console.log("failure: data not saved weak connection");  
    }); 
//hence this is callback hell method

//promise

function savetoDb2(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("success: data was saved");
        } else {
            reject("failure: data was not saved, weak connection");
        }
    });
}
//see the photo for output call "promises output"

//promise methods (then and catch)

let request = savetoDb2("Japan");  //here, request -> promise object
request.then(() => {
    console.log("promise was resolved");
    console.log(request);
})
.catch(() => {
    console.log("promise was rejected");
    console.log(request);
});

// OR more useful and compact version of code
// savetoDb2("Japan")
// .then(() => {
//     console.log("promise was resolved");
// })
// .catch(() => {
//     console.log("promise was rejected");
// });

//promise chaining

savetoDb2("Hey")
.then(() => {
    console.log("data1 saved"); //means hey is saved
    return savetoDb2("helloworld");
})
.then(() => {
    console.log("data2 saved"); //means helloworld is saved
    return savetoDb2("hii");
})
.then(() => {
    console.log("data3 saved"); //means hii is saved
})
.catch(() => {
    console.log("promise was rejected");
}); //this is the same code that 76-99 but with the help of promise we make is compact and improved version

// //result and error 

// //simliar code as above(139-153)

savetoDb2("Hey")
.then((result) => {
    console.log("data1 saved"); 
    console.log("result of promise: ", result);
    return savetoDb2("helloworld");
})
.then((result) => {
    console.log("data2 saved"); 
    console.log("result of promise: ", result);
    return savetoDb2("hii");
})
.then((result) => {
    console.log("data3 saved"); 
    console.log("result of promise: ", result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error);
}); 

// try to run each topic with 104-113 savetoDb2 snippet to understand better while make other topics comment out to view specific output only

//same as 48-55 but here we use promises at the place of callback hell

let h3 = document.querySelector("h3");

function changeColor3(color, delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        h3.style.color = color;
        resolve ("color changed");
    }, delay);
    });
}
//see the image "convert into promises" then go ahead
//this is same as 57-63 but this is easy to understand with promises
changeColor3("red", 1000)
.then(() => {
    console.log("red color is completed");
    return changeColor3("springgreen", 1000)
})
.then (() => {
    console.log("green color is completed");
    return changeColor3("pink", 1000);
})
.then(() => {
    console.log("pink color is completed");
    return changeColor3("aqua", 1000);
})
.then(() => {
    console.log("aqua color is completed");
});