const tasks = require('./taskManagement');
// console.log(tasks, typeof tasks);
tasks.add("First Task","26 March 9 pm",false);
tasks.add("Second Task","26 March 10 pm",false);
tasks.display();
tasks.update(2, "Updated task","26 march 11pm",true);
tasks.display();
tasks.delete();
tasks.display();
console.log(tasks.taskBox);