var express = require("express");
var path = require("path");
var hbs = require("hbs");

var app = express();
var viewsPath = path.join(__dirname, "/template/views");
var partialPath = path.join(__dirname, "/template/partials");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
// app.set("view engine", "vash");
app.set("views", viewsPath)
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/public/index.html")
    res.render("index");
})

app.get("/about", (req, res)=>{
    res.render("about", {
        username : "Sumit Khandelwal",
        age : 34
    })
})

app.listen(3000, () => {
    console.log("Template Engine demo running on Port 3000");
})