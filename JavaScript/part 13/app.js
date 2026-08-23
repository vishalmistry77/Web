//axios(So here we made a random fact generator with the help of an API that can show output in an HTML paragraph, not in the console. )
//using 102-120 in axios for compact code


let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact?max_length=140";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (error) {
        console.log("ERROR-", error);
        return "NO fact found";
    }
}

//now for dog api

let btn2 =document.querySelector("#dog-img");

let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("img");
    img.setAttribute("src", link);
    console.log(link);
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (error) {
        console.log("ERROR-", error);
        return "NO image found";
    }
}

//sending headers with API requests(for that using dadjokes api cuz it give data in xml format so we need to convert it)

const uurl = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        let config = {headers: {Accept : "application/json"} }
        let res = await axios.get(uurl, config);
        console.log(res.data.joke);
    } catch (err) {
        console.log("ERROR-", err);
    }
}

//using query strings(with university api)

// let url3 = "http://universities.hipolabs.com/search?name=";
// let btn3 = document.querySelector("#btn3");


// btn3.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);
//     let cllgArr = await getColleges(country);
//     show(cllgArr);
// })

// function show(cllgArr) {
//     let list = document.querySelector(".list");
//     list.innerText = "";
//     for(cllg of cllgArr) {
//         console.log(cllg.name);
//         let li = document.createElement("li");
//         li.innerText = cllg.name;
//         list.appendChild(li)
//     }
// }
// async function getColleges(country) {
//     try {
//         let res = await axios.get(url3+country);
//         return res.data;
//     } catch (err) {
//         console.log("Error-" , err);
//         return [];
//     }
// }

let url3 = "http://universities.hipolabs.com/search?country=India"; 
let btn3 = document.querySelector("#btn3");


btn3.addEventListener("click", async () => {
    let state = document.querySelector("input").value; 
    console.log(state); 
    let cllgArr = await getColleges();
    
    let fltrCllg = cllgArr.filter((cllg) => {
        return cllg["state-province"] === state;
    });
    show(fltrCllg);
})

function show(cllgArr) {
    let list = document.querySelector(".list");
    list.innerText = "";
    for(let cllg of cllgArr) {
        console.log(cllg.name); 
        let li = document.createElement("li");
        li.innerText = cllg.name; 
        list.appendChild(li);
    }
}
async function getColleges() { 
    try {
        let res = await axios.get(url3); 
        return res.data;
    } catch (err) {
        console.log("Error-" , err);
        return [];
    }
}

//added helo for main
//add helo for test

