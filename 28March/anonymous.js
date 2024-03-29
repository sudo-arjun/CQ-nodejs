const fs = require ('fs');

function print(err,data){
    console.log(data);
}

// fs.readFile('./28March/txt.txt','utf-8',(err,data)=>{
//     console.log(data);
// })
fs.readFile('./28March/txt.txt','utf-8',print)