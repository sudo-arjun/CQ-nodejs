const http = require('http');
const routes = require('./routes')
const url = require('url');
const data = require('./tasks.json');
const server = http.createServer(reqHandler);
// console.log(data, typeof routes);
function reqHandler(req, res) {
    req.url = url.parse(req.url, true);
    // console.log(endPoint); 
    let data = new String();
    req.on('data',(d)=>{
        data += d;
    })
    req.on('end', () => {
        req.body = data;
        if (req.url == '/favicon')
            return;
        else if (routes[req.url.pathname] && routes[req.url.pathname][req.method]) {

            routes[req.url.pathname][req.method](req, res);
        }
        else {
            console.log("Endpoint not available");
            res.end("Invalid route!");
        }
    })

}
server.listen('3000', () => console.log("Listening at 3000"))