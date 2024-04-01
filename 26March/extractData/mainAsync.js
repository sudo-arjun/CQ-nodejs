/*
1. read the directory and get to know about the files
2. read file one by one and then write them
*/
const fs = require('fs');
const path = require('path');
const dir = './files', destination = './allData.txt';

//callback hell :- callback in callback ...
// Hard to understand and debug
/*
fs.readdir(dir, (err, files) => {
    if (err)
        console.log(err);
    else {
        for (let fileName of files) {
            let address = path.join(dir, fileName)
            fs.readFile(address, 'utf-8', (err, data) => {
                if (err)
                    console.log("error in file read");
                else {
                    (async function () {
                        await fs.appendFile(destination, data, (err) => {
                            if (err)
                                console.log("error in append")
                        })
                    })();
                }
            })
        }
    }
})
*/
