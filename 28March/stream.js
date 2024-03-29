const fs = require('fs');
const { getDefaultHighWaterMark } = require('stream');
const stream = fs.createReadStream('./txt.txt','utf8');

stream.on('open',()=>{
    console.log("opened");
})
stream.on('data',(chunk)=>{
    console.log(chunk);
})