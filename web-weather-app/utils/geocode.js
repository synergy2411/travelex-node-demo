var request = require("request");

var getLocation = (address, cb) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAOIA3C43yp1OJPtEIMVNmdWpc_v5ecXx0`,
        json: true,
        rejectUnauthorized: false
    }, (error, response, body) => {
        if (error) {
            cb("Unable to connect with Google Server.");
        }
        // check whether body and results exists
        cb(null, {
            lat: body.results[0].geometry.location.lat,
            lng: body.results[0].geometry.location.lng,
            formatted_address: body.results[0].formatted_address
        })
    })
}
module.exports = { getLocation }