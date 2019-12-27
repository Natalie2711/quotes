const express = require("express");
const mongoose = require("mongoose");
var app = express();
var port = 3000;
const path = require('path');

const bodyParser = require('body-parser');// body parser :To parse the data in the body 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set("views", "views"); // set view property to the path of view directory
app.set("view engine", "pug"); // update the ‘view engine’ property  set its value to pug

// connect to the database
mongoose.Promise = global.Promise;// mongoose
mongoose.connect("mongodb://localhost:27017/quotes_db");

// create database schema
const qpackageSchema = new mongoose.Schema({ // define attributes for documents saved and retrieved from database   
    title: String,
    quotes: Array,
    _id: Number
});

// create a package model qpackage to use 
const qpackagesModel = mongoose.model("qpackages", qpackageSchema) // use this model to read from database and

// create database schema
const userSchema = new mongoose.Schema({ // define attributes for documents saved and retrieved from database   
    name: String,
    phoneNumber: Number,
    packageId: Number
});

// create a user model qpackage to use 
const userModel = mongoose.model("users", userSchema) // use this model to read from database and

app.get('/', async function (req, res) {
    // get all package titles
    const packages = await qpackagesModel.find({}, "_id title");
    console.log(packages);
    res.render('index', {packages: packages});
});

app.get("/about", (req, res) => {
    res.send("Introduction about the project") // send string, later can send html file
});

app.post("/submit-form", (req, res) => {
    const user = new userModel(req.body);
    user.save().then(item => res.send("saved to database.")); // data from the submit form , written to the database
});
 
// add the router
app.listen(port, () => {
    console.log("Server listening on port " + port);
});


