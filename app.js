const express = require("express");
const mongoose = require("mongoose");
var app = express();
var port = 3000;
const path = require('path');

const bodyParser = require('body-parser');// body parser :To parse the data in the body 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;// mongoose
mongoose.connect("mongodb://localhost:27017/quotes");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "\\views\\index.html")); // this is what happen when you click quotes.com/
    
});

app.get("/about", (req,res) => {
    res.send("Introduction about the project") // send string, later can send html file
});

app.post("/submit-form", (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phoneNumber = req.body.phoneNumber;

    console.log(username);
});
 
// add the router
app.listen(port, () => {
    console.log("Server listening on port " + port);
});

