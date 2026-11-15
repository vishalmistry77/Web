const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true})); //to parse the form data in the request body
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({ // Create the connection to database
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: '1818',
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
};

//home route
app.get("/", (req, res) => {  //ROUTE TO GET COUNT OF USERS IN THE DATABASE
    let q = "SELECT count(*) FROM user";
    try {
    connection.query(q , (err, result) => {
        if(err) throw err;
        let count = result[0]["count(*)"]; //HERE RESULT WILL BE AN ARRAY OF OBJECTS, EACH OBJECT REPRESENTING A TABLE IN THE DATABASE
        res.render("home.ejs", {count});    
    });
    } catch(err) {
        console.log(err);
        res.send("Some error in DB")
    }
});

app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q , (err, users) => {
        if(err) throw err;
        res.render("showusers.ejs", {users});
    });
    } catch(err) {
        console.log(err);
        res.send("Some error in DB")
    }
});
//Edit route
app.get("/user/:id/edit", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q , (err, result) => {
        if(err) throw err;
        let user = result[0];
        res.render("edit.ejs", {user});
    });
    } catch(err) {
        console.log(err);
        res.send("Some error in DB")
    }
});
//Update (in DB)route
app.patch("/user/:id", (req, res) => {
  let {id} = req.params;
  let {username: newUsername, password: newPassword} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q , (err, result) => {
        if(err) throw err;
        let user = result[0];
        if(newPassword != user.password) {
          res.send("Password is incorrect.");
        } else {
          let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
          connection.query(q2 , (err, result) => {
            if(err) throw err;
            res.redirect("/user");
          }
    )}
    });
    } catch(err) {
        console.log(err);
        res.send("Some error in DB")
    }
});
//new route

app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req,res) => {
  let {username, email, password} = req.body;
  let id = faker.string.uuid();
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}')`;
  try {
    connection.query(q , (err, result) =>{
      if(err) throw err;
      console.log("new user added");
      res.redirect("/user");
    });
  } catch(err) {
    console.log(err);
    res.send("Some error in DB")
  }
});

app.get("/user/:id/delete", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q , (err, result) =>
    { 
      if(err) throw err;
      let user = result[0];
      res.render("delete.ejs", {user});
    });
    }catch(err) {
        res.send("Some error in DB");
    }
  });

app.delete("/user/:id", (req, res) => {
  let {id} = req.params;
  let {password} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q , (err, result) =>{
    if (err) throw err;
    let user = result[0];

    if(user.password != password) {
      res.send("Password is incorrect.");
    } else {
      let q2 = `DELETE FROM user WHERE id='${id}'`;
      connection.query(q2 , (err, result) => {
        if(err) throw err;
        else{
          console.log(result);
          console.log("user deleted");
          res.redirect("/user");
        }
      });
    }
  });
  } catch(err) {
    res.send("Some error in DB");
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

