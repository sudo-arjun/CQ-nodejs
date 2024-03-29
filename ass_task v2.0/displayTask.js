module.exports = function (taskArr){
    for(let i=0;i<taskArr.length;i++)
    {
        console.log("id = ",taskArr[i].id,"\ttask = ",taskArr[i].taskName);
    }
}   