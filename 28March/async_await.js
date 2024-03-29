// let date = new Date();
let startTime = Date.now();

const promise1 = new Promise((res,rej)=>{
    console.log()
    setTimeout(()=>{
        console.log("First promise");
        res("promise1 completed");
        console.log(Date.now()-startTime)
    },2000)
})
const promise2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("Second promise");
        console.log(Date.now()-startTime)
        res("promise2 complete");
    },2000)
})


promise1.then(()=>{
    promise2.then(()=>{
        console.log("in the promise2");
        console.log(Date.now()-startTime)
    })
    console.log("in then promise1");
    console.log(Date.now()-startTime)
})

// Alternative
// async function run(){
//     const result1 = await promise1;
//     console.log(result1);
//     console.log(Date.now()-startTime)
//     const result2 = await promise2;
//     console.log(result2);
//     console.log(Date.now()-startTime)
// console.log("Hello world");
// };
// run()