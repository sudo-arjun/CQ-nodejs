const http = require('http');
const url = require('url');
const route = require('./route.js');
const server = http.createServer(reqHandler);

function reqHandler(req,res){
    req.url = url.parse(req.url,true);
    let pathname = req.url.pathname;
    if(route[pathname] && route[pathname][req.method])
    {   
        setTimeout(()=>{
            route[pathname][req.method](req,res);
        },1)
    }
    else{
        res.statusCode = 404;
        res.end("404 not found!");
    }
    console.log(pathname)
}

server.listen('3000',()=>console.log("Listening at 3000"));