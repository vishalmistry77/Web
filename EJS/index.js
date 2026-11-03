const express = require('express');
const app = express();
const path = require("path"); //so always use 3 & 8 lines to tell express where to look for views folder cuz if you don't use it, express will look for views folder in the root directory of your project so better we secify the views folder path

const port = 8080;

//serving static files like css, js, images etc. from public folder to the browser
app.use(express.static(path.join(__dirname, "/public/css"))); 
app.use(express.static(path.join(__dirname, "/public/js")));

app.set("view engine", "ejs"); //Imagine 'view' word as templates
app.set("views", path.join(__dirname, "/views")); //line 3 & 8 will tell express to look for views folder in the current directory 

app.get('/', (req, res) => {
    res.render("home.ejs"); //by default express looks for views folder in the root directory so no need to specify the path of file
});

app.get('/rolldice', (req, res) => {
    let diceVal = Math.floor(Math.random() * 6 ) + 1; //assuming that the data is coming from DB 
    res.render("rolldice.ejs", {diceVal}); //passing the data to the view file
});

app.get('/ig/:username', (req, res) => {  //making basic template of Insta by sending custom username 
    let {username} = req.params;
    let instData = require("./data.json");
    const data = instData[username];
    if(data){
    res.render("instagram.ejs", {data});
    } else {
        res.render("error.ejs");
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});