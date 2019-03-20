var http = require("http");
var server = http.createServer((request, response)=>{
    console.log("Method : ", request.method);
    console.log("URL : ", request.url);
    response.writeHead(200);
    response.write("Hello Client!");
    response.end();
});

server.listen(3000, ()=>{
    console.log("Server started at Port 3000");
})