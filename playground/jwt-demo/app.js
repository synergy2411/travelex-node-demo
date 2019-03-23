// npm i jsonwebtoken express --save

var app = require("express")();
var jwt = require("jsonwebtoken");

app.get("/api", (req, res) => {
    res.send({
        message: "success"
    })
})

app.get("/login", (req, res) => {
    var user = { id: 101 };
    var token = jwt.sign(user, "my_super_secret_key");
    res.send({
        "message": "logged in",
        "token": token
    })
})

function ensureToken(req, res, next) {
    console.log("[Authorization]", req.headers['authorization']);
    var bearerToken = req.headers['authorization'];
    if (bearerToken != undefined) {
        var bearerTokenArray = bearerToken.split(" ");
        var token = bearerTokenArray[1];
        req.token = token;
        next();
    }
    else {
        res.send({ message: "Unauthorized" })
    }
}

app.get("/protected", ensureToken, (req, res) => {
    jwt.verify(req.token, "my_super_secret_key", (err, decode) => {
        if(err) {
            console.log(err);
            return res.send({message : "Token Modified"})
        }
        console.log("[DECODE]",decode);
        if(decode != undefined){
            return res.send({
                message: "Authorised User"
            })
        }
    });
})

app.listen(3000, () => {
    console.log("Server started...");
})