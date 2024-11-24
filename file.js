// const math = require('./math.js')
const fs = require("fs")
// console.log("heo i am a javascript deveoper", math.add(2,3))
const http = require("http");
const PORT  = 8000;
const myServer = http.createServer((req,res)=>{
    // console.log("new req recieved!");
    const Log = `${Date.now()}: ${req.url},New Req received\n`;
    fs.appendFile('Log.txt',Log,(err,data)=>{
        switch(req.url){
            case '/':
                res.end("HomePage");
                break;
            case "/about":
                res.end("I am shamshad")
                break;
            default:
                res.end("404 Not Found");

        }
          
    })
    
});


myServer.listen(8000, ()=>console.log("Server Started"))