const http = require('http');
// console.log(http);
const fs = require('fs')
const url = require('url')
const data = JSON.parse(fs.readFileSync('./questions.json','utf-8'));
console.log(data[0][0]);
const server = http.createServer(reqHandler);

function reqHandler(req,res){
    req.url = url.parse(req.url,true);
    console.log(req.url);
    if(req.url.path == '/')
    {
        let htm = fs.readFileSync('./home.html','utf-8');
        res.end(htm);
    }
    else if(req.url.path == '/favicon.ico')
    {
        
        return;
    }
    else
    {
        let n = req.url.query.n;
        console.log(req.url.query.n);
        let question = data[0][n];
        console.log(question);
        res.end(JSON.stringify(question));
    }
    // res.end("");
    // if(req.url)
}
server.listen(3000,_=>console.log("Listening at 3000"));