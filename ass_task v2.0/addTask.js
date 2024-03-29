module.exports = function addTask(taskArr,task){
   let id1 = taskArr.length;
   taskArr[id1] = {
    id:id1,
    taskName:task
   }
}