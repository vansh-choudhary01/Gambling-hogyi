const express = require("express");
const path = require("path");
const app = express();
// const mongoose = require('mongoose');
// const User = require("./db.js");
const addUser = require("./container/add.js");
const checkUser = require("./container/login.js");
const bigSmall = require("./container/bigSmall.js");

app.set("views", path.join(__dirname, "../Frontend"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../Frontend")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("/login");                                                        
})

app.get("/login", (req, res) => {
    res.render("LoginPage/index.ejs");
})

app.get("/signUp", (req, res) => {
    res.render("SignUpPage/index.ejs");
})

app.get("/game", checkUser);
app.post("/game", addUser);

app.get("/colors", bigSmall);

app.listen(8080);