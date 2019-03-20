var yargs = require("yargs");

var argv = yargs.option({
    address : {
        string : true,
        demand : true,
        description : "Address to get temperature",
        alias : "a"
    }
}).argv;

console.log("Address : ", argv.address);