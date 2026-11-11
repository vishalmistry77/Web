const express = require('express');
const app = express();
let port = 8080;
const path = require('path');
const { randomUUID } = require("crypto");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let feeds = [
    {
        id: randomUUID(),
        username: "vishal",
        image: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
        caption: "This is my first post"
    },
    {
        id: randomUUID(),
        username: "harshit",
        image: "https://www.adobe.com/uk/creativecloud/photography/discover/media_1271a7f98c8f0a907643346bd952b678aaafc3a22.png?width=750&format=png&optimize=medium",
        caption: "This is my first achievement"
    },
    {
        id: randomUUID(),
        username: "ayush",
        image: "https://www.equinetmedia.com/hubfs/How-to-find-b2b-blog-images.png",
        caption: "This is my first trip"
    }
]

app.get("/feeds", (req,res) => {
    res.render("index.ejs", {feeds});
});

app.get("/feeds/new", (req,res) => {
    res.render("new.ejs");    
});

app.post("/feeds", (req,res) => {
    let id = randomUUID();
    let {username,image, caption} = req.body;
    feeds.push({id, username, image, caption});
    res.redirect("/feeds");
});

app.get("/feeds/:id", (req,res) => {
    let {id} = req.params;
    let feed = feeds.find((f) => id === f.id);
    res.render("show.ejs", {feed});
});

app.patch("/feeds/:id", (req,res) => {
    let {id} = req.params;
    let newCaption = req.body.caption;
    let feed = feeds.find((f) => id === f.id);
    feed.caption = newCaption;
    console.log(feed);
    res.redirect("/feeds");
});

app.get("/feeds/:id/edit", (req,res) => {
    let {id} = req.params;
    let feed = feeds.find((f) => id === f.id);
    res.render("edit.ejs", {feed});
});

app.delete("/feeds/:id", (req,res) => {
    let {id} = req.params;
    feeds = feeds.filter((f) => id !== f.id);
    res.redirect("/feeds");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});