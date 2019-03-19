// var os = require("os");
// console.log("Total Memory : ", os.totalmem());
// console.log("Architecture : ", os.arch());
// console.log("Number of Core : ", os.cpus().length);


var fs = require("fs");

var stringBuffer = fs.readFileSync("./singleton.js");
console.log(stringBuffer.toString());

fs.readFile("./eventloop.js",function(err, data){
    console.log("Data", data.toString());
})

console.log("Working with File System");