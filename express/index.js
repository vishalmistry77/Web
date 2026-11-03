const express = require('express');
const app = express();

let port = 3000; //or 8080
//so were are staring a server

app.listen(port, () => {
    console.log(`app is listening ${port}`); //if you run in terminal with node then to stop press "ctrl+c"  
});

// app.use((req, res) => { //You can send only ONE response for ONE request. so only one res.send() so uncomment 1 response 
//     console.log("request recevied"); //it tells that requests are coming
//     //to print resopnse on browser
//     // res.send("Hello World!"); //get response in text
//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // }); //get resopnse in object 
//     // res.send("<h1>Hello & Hi</h1>"); //get resopnse in html
//     //OR
//     let code = "<h1>Fruits</h1><ul><li>mango</li><li>apple</li></ul>";
//     res.send(code);
// });

//routing methods(remember: 1 request → 1 response)

//different paths, different responses but 1 path = 1 response 
// app.get('/', (req, res) => {
//   res.send("you contacted root(/) path"); //cuz '/' is called main/root path means first page of website
// });

// app.get('/apple', (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get('/mango', (req, res) => {
//     res.send("you contacted mango path");
// });

// app.get("/{*splat}", (req, res) => { // /{*splat} means else case, if you enter non-defined path so this will send  
//     res.send("the path not exist");
// });

// app.post('/', (req, res) => { //try this in hoppscoth with post option
//   res.send("you sent post request to root"); 
// });

//req.params(path parameters)

// app.get("/:username/:id", (req, res) => {  //means if you enter any path like http://localhost:3000//apple/123 then it will send response with htmlStr according to res.send 
//     let {username, id} = req.params;
//     let htmlStr = `<h1>Hello, Welcome to the page of @${username}</h1>`;
//     res.send(htmlStr);
// });

//query strings (req.query)

app.get("/search", (req, res) => { //try this in browser with http://localhost:3000/search?name=apple&color=red , means two query strings name and color. You can change the values of name and color in url to get different response.
    let {name, color} = req.query;
    if(!name || !color) {
        res.send("<h2>Nothing searched</h2>");
    }
    res.send(`<h2>You searched for ${name} and its color is ${color}</h2>`);
});