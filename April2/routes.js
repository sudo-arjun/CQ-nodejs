const data = require('./tasks.json');
const fs = require('fs').promises;
const url = require('url');
const taskPath = './tasks.json';
const trashPath = './trash'
const routes = {
    '/': {

    },
    '/tasks': {
        'POST':async function(req,res){
            let id = req.url.query.id;
            let newTask = JSON.parse(req.body);
            await insert(taskPath,id,newTask)
            res.end("task inserted");
        },
        'GET':async (req,res)=>{
            // fs.readFile(taskPath,(err,data)=>{
            //     res.end(data);
            // })
            let data = await fs.readFile(taskpath,'utf-8');
            res.end(data);
        },
        'PUT':async (req,res)=>{
            let id = req.url.query.id;
            let newTask = JSON.parse(req.body);
            await insert(taskPath,id,newTask)
            res.end("task inserted");
        },
        'DELETE':async(req,res)=>{
            let id = req.url.query.id;
            let data = await fs.readFile(taskPath,'utf8');
            let obj = JSON.parse(data);
            if(id in obj)
            {
                await insert(trashPath,id,obj[id]);
                delete obj[id];
                await fs.writeFile(taskPath,JSON.stringify(obj));
                console.log("File moved to trash")
                res.end("done");
            }
            res.end("task not found!")
        }
    },
    '/trash':
    {
        'GET':async (req,res)=>{
            let data = await fs.readFile(trashPath);
            res.end(data);
        }
    }
}

async function insert(filePath,id,obj)
{
    console.log(filePath,id,obj)
    let data = await fs.readFile(filePath,'utf-8');
    let parsedData = JSON.parse(data);
    parsedData[id] = obj;
    await fs.writeFile(filePath,JSON.stringify(parsedData));
}

module.exports = routes;