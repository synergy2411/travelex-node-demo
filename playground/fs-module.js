var fs = require("fs");
var gzip = require("zlib").createGzip();
var readStream = fs.createReadStream("./eventloop.js");

readStream.on("readable", function(){
    var chunk;
    while (null !== (chunk = readStream.read())) {
        console.log(chunk);
    }
    
})
var writeStream = fs.createWriteStream("./contents.gz");

readStream.pipe(gzip).pipe(writeStream);