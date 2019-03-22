var express = require("express");
var geo = require("./utils/geocode");
var forecast = require("./utils/forecast");
var app = express()

app.use(express.static(__dirname+'/public'));
app.use(require("body-parser").urlencoded({extended : true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname +"/public/index.html");
});
app.get("/weather", (req, res)=>{
    if(req.query){
        console.log(req.query);
        geo.getLocation(req.query.address, function(err, location){
            if(err){
                return res.send({error : err})
            }
            forecast.getForecast(location, function(err, forecastData){
                if(err) {
                    return res.send({error : err})
                }
                res.send(forecastData);
            })
        })
    }
})
app.post("/weather", (req, res)=>{
    if(req.body){
        geo.getLocation(req.body.address, function(err, location){
            if(err){
                return res.send({error : err})
            }
            forecast.getForecast(location, function(err, forecastData){
                if(err) {
                    return res.send({error : err})
                }
                res.send(forecastData);
            })
        })
    }
});
app.listen(3000, ()=>{
    console.log("Weather app running on Port 3000");
})


