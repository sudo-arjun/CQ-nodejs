const http = require('http')

let data = {
    1: {name:"chetan prakash", age:20},
    2: {name:"abc", age:21},
}

let server = http.createServer((request,response)=>{
    if(request.url == '/'){
        console.log("request received at /")
        response.write("Home page",(err)=>{
            console.log("Can't write for req. at /")
        })
        setTimeout(()=>response.end(),100);
    }
    else{
        let data = getData(request.url)
        if(typeof(data) == 'string')
            response.write(data);
        else
            response.write("No data available!");

        setTimeout(()=>response.end(),100);

    }
})
server.listen(1234,()=>console.log("listening at 1234"))

function getData(url){
    let id = "", urlArr = Array.from(url);

    for(let i = 5;i< urlArr.length; i++)
        id+=urlArr[i];

    return JSON.stringify(data[id]);
}