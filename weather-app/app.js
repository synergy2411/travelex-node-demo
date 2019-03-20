var yargs = require("yargs");
var geocode = require("./utils/geocode");
var forecast = require("./utils/forecast");

var argv = yargs.option({
    address: {
        string: true,
        demand: true,
        description: "Address to get temperature",
        alias: "a"
    }
}).argv;

geocode.getLocation(argv.address, function (err, location) {
    if (err) {
        console.log(err);
    } else {
        forecast.getForecast(location, function (err, forecastData) {
            if (err) {
                console.log(err)
            } else {
                console.log(`
Hi, it seems like ${forecastData.temperature} in your town
_______________________________________________________
Forecast is ${forecastData.summary}
                
                `)
            }

        })
    }
})
