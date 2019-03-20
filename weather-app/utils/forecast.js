var request = require("request");

var getForecast = function (location, cb) {
    request({
        url: `https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${location.lat},${location.lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            cb("Unable to reach Forecast server");
        }
        // check whether body and results exists
        cb(null, {
            temperature : body.currently.temperature,
            summary : body.daily.summary
        })
    })
}

module.exports = { getForecast }