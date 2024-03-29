//purpose to allow add, delete, update and display tasks
let taskBox = {}, maxId = 0;
function addTask(taskName,time,status){
    // console.log("add");
    taskBox[++maxId] = {
        taskName,
        time,
        status
    }
}
function deleteLastTask(){
    // console.log("delete");
    delete taskBox[maxId--];
}
function updateTask(id,newTaskName,time,status){
    // console.log(("update"))
    if(id<=maxId){
        taskBox[id] = {
            taskName : newTaskName,
            time,
            status   
        }
        return 1;
    }
    else{
        return -1;
    }
}
function displayTask(){
    // console.log("display");
    for(let i = 1; i <= maxId; i++)
    {
        console.log("Task: ",taskBox[i].taskName,"\tCreated on: ",taskBox[i].time,"\t Task Completed: ",taskBox[i].status);
    }
    console.log("------------------");
}
module.exports = {
    taskBox,
    add: addTask,
    delete: deleteLastTask,
    update: updateTask,
    display: displayTask
}