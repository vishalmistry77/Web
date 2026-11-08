const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data (from forms)
app.use(express.json()); //Default we use in every POST request 

app.get("/register", (req, res) => {
    let {username, password} = req.query; //Eventually, the data will go in query-string, so we use req.query. 
    res.send(`standard GET response. Welcome ${username}`);
});

app.post("/register", (req, res) => {
    let {username, password} = req.body; //Eventually, the data will go in body, so we use req.body. 
    res.send(`standard POST response. Welcome ${username}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});