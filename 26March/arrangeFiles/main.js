/*
Create a folder with files having multiple ext.
Based on extensions segerate files in diff. folder
*/
// const mapFileName = []
const fs = require('fs');
const path = require('path');
let fileNames = fs.readdirSync('./mix_files');


for(let i = 0; i < fileNames.length; i++)
{
    fs.cp(getSource(fileNames[i]) ,getDestination(fileNames[i]),(err)=>{
        console.log(i,err);
    })
}

function getSource(name)
{   
    let address = "";
    address = './mix_files' + name;
    return address;
}
function getDestination(name){
    let address = "./";
    for(let i = 1; i < path.extname(name).length; i++)
    {
        address += path.extname(name)[i];
    }
    address += '/'
    address += name;
    // console.log(address);
    return address;
}









//Creating a folder
//How to check if folder already exists or not
// fs.mkdirSync(path.extname(fileNames[0]));