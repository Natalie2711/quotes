var express = require("express");
var app = express();
var port = 3000;
const path = require('path');
 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "\\views\\index.html")); // this is what happen when you click quotes.com/
});

app.get("/about", (req,res) => {
    res.send("Introduction about the project") // send string, later can send html file
});

app.post("/submit-form", (req,res) => {
    const username = req.body;
    console.log(username);
});
 
app.listen(port, () => {
    console.log("Server listening on port " + port);
});

