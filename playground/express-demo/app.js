var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongo = require("./utils/mongo-utils");

var app = express();
mongo.connectMongo();

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({extended : false}));

app.get("/", (request , response)=>{
    // response.status(200).send("<h2>Hello from express!!</h2>");
    response.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/data", (req, res)=>{
    res.json({"username" : "foo", age :32});
})

app.get("/register", (req, res)=>{
    console.log(req.query);

    mongo.createDocument(req.query, function(err, data){
        if(err){
            return res.send(err)
        }
        res.send(data);

    })
})

app.post("/register", (req, res)=>{
    if(req.body){
        console.log(req.body);
    }
    res.send({msg : "Post API hit."});
})

app.listen(3000, ()=>{
    console.log("Express server running on Port 3000");
})

// npm i nodemon -g