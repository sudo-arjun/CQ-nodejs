const events = require('events');

const eventEmitter = new events();

eventEmitter.on("helloEvent",(a)=>{
    console.log("helloEvent listened");
})
eventEmitter.emit("helloEvent");