const http = require('http');
const fs = require('fs');
const server = http.createServer((request,response)=>{
    // response.writeHead(200,'{mes:"this is string in header"}')
    // response.write("This is write");
    // response.end("Namaste World!");
    console.log(response)
    server.close();
})  
server.listen(4000,()=>console.log("Server is listening"))



/*
//creating a fullfledged nodejs server
const http=require('http');
const url=require('url');
//creating a server instance

//url , pathname ,  query parameters

//diffrent methods
//get
//post  -- body goes along
//put  -- body goes along
//delete
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    //parsing the url
    let parsedUrl=url.parse(req.url,true);
    console.log(parsedUrl.query);
    if(req.url==='/favicon.ico'){
        return;
    }
    //taking the
    */