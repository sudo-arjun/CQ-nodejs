const http = require('http');
const fs = require('fs');
// let data;
let promise = new Promise((res, rej) => {
    fs.readFile('./file.json', 'utf8', (err, data) => {
        if (err)
            rej(err);
        res(data);
    })
})
// .then((data)=>{
//     function getData(n){
//         return data;
//     }
//     return data;
// })
const server = http.createServer((request, response) => {
    if (request.url == '/') {
        response.end("Home page");
    }
    else if (request.url == '/favicon.ico') {
        return;
    }
    else {
        promise.then((data) => {
            // setTimeout(()=>{

            //     response.end(getData(1));
            // },10000)
            response.end(getData(request.url, data));
        })
    }
    // response.writeHead(200,'{mes:"this is string in header"}')
    // response.write("This is write");
    // response.end("Namaste World!");
    // console.log(response)
})
server.listen(4000, () => console.log("Server is listening"))

function getData(url, data) {
    url = url.substring(1);
    let n = Number(url);
    if (isNaN(n)) {
        return "Data not found!";
    }
    else {
        dataArr = JSON.parse(data);
        data = "";
        dataArr.forEach((obj, index) => {
            if (index < n)
                data += JSON.stringify(obj);
        })
        return data;
    }
}






















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