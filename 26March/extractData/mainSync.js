const fs = require('fs')
// raad files names
fileNames = fs.readdirSync('./files')
let data = "";
//read data
for (let i = 0; i < fileNames.length; i++) {
    data += fs.readFileSync("./files/" + fileNames[i]);
}
//write data, can be async. because only have to write single string
fs.writeFile('./allData.txt',data,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Success!");
    }
})