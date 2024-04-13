const appHtmlPath = '../frontend/app.html';
const appCssPath = '../frontend/app.css';
const appJsPath = '../frontend/app.js';

const fs = require('fs').promises;
let route = {
    '/': {
        'GET': async(req,res)=>{
            let htmlPg = await fs.readFile(appHtmlPath,(err)=>{
                console.log(err);
            })
            res.end(htmlPg);
        }
    },
    '/css':{
        'GET': async(req,res)=>{
            let css = await fs.readFile(appCssPath,(err)=>{
                console.log(err);
            })
            res.writeHeader(200,{'Content-Type': 'text/css' })
            res.end(css);
        }
    },
    '/app.js':{
        'GET': async(req,res)=>{
            let css = await fs.readFile(appJsPath,(err)=>{
                console.log(err);
            })
            res.writeHeader(200,{'Content-Type': 'text/javascript' })
            res.end(css);
        }
    },
    '/ques': {
        'GET': async(req,res)=>{
            //Check mode and number of question to send
            let mode = req.url.query.mode;
            let n = Number(req.url.query.n);
            let quesArr = JSON.parse(await fs.readFile(`./questions/${mode}.json`));
            //select n random question using selectQues function
            let quesRequired = selectQues(quesArr,n);
            res.end(JSON.stringify(quesRequired));
        }
    }
}
function selectQues(arr,max){
    let i = 0;
    if(arr.length <= max)
    return arr;
    
    let newArr = Array(max);
    //put random indexes of arr on newArr
    for(let i = 0;i < max; i++){
        let flag = 1;
        let randomIndex = Math.floor(Math.random() * arr.length);
        for(let j=0; j < i; j++)
        {
            if(randomIndex == newArr[j])
            {
                flag = 0;
                i--;
                break;
            }
        }
        if(flag == 1)
        newArr[i] = randomIndex;
    }    
    //subsitute respective index question in newArr
    for(let i = 0;i < newArr.length; i++)
        newArr[i] = arr[newArr[i]];
    return newArr;
}

module.exports = route;