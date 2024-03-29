const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}
)

const addTask = require('./addTask.js');
const displayTask = require('./displayTask.js');
const updateTask = require('./updateTask.js');
const deleteTask = require('./deleteTask.js');
let taskArr = new Array;

// console.log("----------TASK KEEPER----------")
// while (1) {
//     console.log("1. Add Task");
//     console.log("2. Update Task");
//     console.log("3. Delete Task");
//     console.log("4. Display");
//     r1.question("Enter your choice: ", (choice) => {
//         switch (choice) {
//             case 1: r1.question("Enter Task: ", (ans) => {
//                 addTask(taskArr, ans);
//                 r1.close();
//                 })
//                 break;
//             case 2:
//                 displayTask(taskArr);
//                 r1.question("Enter id of task to update:- ",(id)=>{
//                     r1.question("Enter new Task:- ",(newTask)=>{
//                         updateTask(taskArr,id,newTask);
//                         r1.close();
//                     })
//                 })
//                 break;
//             case 3:
//                 deleteTask(taskArr);
//                 break;
//             case 4:
//                 displayTask(taskArr);
//                 break;
//             default:
                        
//         }
//         r1.close();
//     });
//     break;
// }

// r1.question("Enter task:", (answer, ans2) => {
//     console.log("is what you entered, Please check:-", answer);
//     // console.log("answer 2:-",ans2);
//     // r1.close();
//     r1.question("Enter secong task:-", ans => {
//         console.log(`This is your second task:- ${ans}`);
//         r1.close();
//     })
// })
r1.question("ok",(ok)=>console.log(ok))
// r1.close();
r1.question("ok2",(ok)=>console.log(ok))
r1.close();
// addTask(taskArr,"task1");
// addTask(taskArr,"task2");
// displayTask(taskArr);
// deleteTask(taskArr);
// displayTask(taskArr);
// console.log(taskArr[0]);
