//async keyword

async function greet() {
    // throw "some random error"; //returns a promise but it will return promise rejected due to error (means we create manual error)
    return "hello!"; //returns a promise and it shows promise fulfilled
} // if line-2 was uncomment then catch will execute otherwise then

greet()
.then((result) => {
    console.log("promise was resolved");
    console.log("result was:", result);
})
.catch((err) => {
    console.log("promise was rejected with error: ", err);
});
//async in arrow fns
let demo = async () => {
    return 5;
}; 
//write "demo();" in console for o/p

//await keyword

function randNum() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function getNum() {
    await randNum(); //without await it will wait 1s acc. to delay them it will print all 3 at once, but await keyword will wait each fns individually 1s->1000ms
    await randNum();
    randNum();
} //call the "getNum();" to see o/p

//the code of part11 app.js line 195-210 that we make in just 5 lines with async and await keyword improved version 
let h1 = document.querySelector("h1");

function color(color, delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        h1.style.color = color;
        console.log(`color changed to ${color}!`);
        resolve ("color changed");
    }, delay);
    });
}

async function colorChange() {
    await color("red", 1000);
    await color("springgreen", 1000);
    await color("pink", 1000);
    color("aqua", 1000);
}

//handling rejection (see images)

//JSON.parse() method

let jsonRes = '{"message":"https://images.dog.ceo/breeds/saluki/n02091831_4087.jpg","status":"success"}';

let validRes = JSON.parse(jsonRes);
console.log(validRes); //with json.parse we can convert json string to js object means like validRes.message will give the url of image
console.log(validRes.message); //gives the url of image

//JSON.stringify() method

let student = {
    name: "vishal",
    age:19
};

//write "JSON.stringify(student);" in console to see the output which will convert js object to json string

//our first request using fetch api

let url = "https://catfact.ninja/fact?max_length=140";

fetch(url)
.then((response) => {
    // console.log(response.json()); //to make response readable in console, actually it returns a promise. You see in promiseresult objects
    return response.json();
})
.then((data) => {
    console.log("data1: ", data.fact);
    return fetch(url);
})
.then((response) => {
    return response.json();
})
.then((data2) => {
    console.log("data2: ", data2.fact);
})
.catch((err) => {
    console.log("ERROR-", err);
});

//using fetch with async/await (calling api)

//using line 81

async function getFacts() { //to avaoid error we can use try and catch block
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact); //cuz this is aschronous without await it will return promise pending, but with await it will wait for the api response and then return the response object

        let res2 = await fetch(url); //chaining the api call to get the second fact also
        let data2 = await res2.json();
        console.log(data2.fact); 
    } catch (error) {
        console.log("ERROR-", error);
    }

    console.log("heloo");  //due to try and catch if any error will come then also this line with execute
}