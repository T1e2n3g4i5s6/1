const { readFileSync } = require("fs");
let http = require("http");

http.createServer(function(req, res){

    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Hello ::::))))")
    res.write("profile.html")
    // if(req.url == '/profile.html'){
        
    // }

}).listen(8080)
console.log("http://localhost:8080/");
