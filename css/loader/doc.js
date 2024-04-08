let loader = document.querySelector('.loader');
let hole = document.querySelector(".hole");
let hue = 0, saturation = 70, light = 70, alpha = 70;
let height = {
    value: 3,
    flag: 'increment',
    steps: 0.005,
    max: 5,
    min: 3
}, width = {
    value: 5,
    flag: 'increment',
    steps: 0.005,
    max: 5,
    min: 3
}

setInterval(() => {
    console.log(loader.style.backgroundColor);
    loader.style.backgroundColor = `hsla(${hue++},${saturation}%,${light}%,${alpha}%)`;
    if (hue == 360) {
        hue = 0;
    }
    loader.style.width = `${width.value}em`;
    hole.style.width = `${width.value - 1}em`;
    loader.style.height = `${height.value}em`;
    hole.style.height = `${height.value - 1}em`;
    gradual(width);
    gradual(height);
    console.log(width,height)
}, 100)

function gradual(obj) {
    //set status
    if(obj.value > obj.max)
    obj.status = 'decrement';
    else if(obj.value < obj.min)
    obj.status = 'increment';
    //change value
    if (obj.status == 'increment')
        obj.value += obj.steps;
    else
        obj.value -= obj.steps
}
// setInterval(()=>{
//     loader.style.width = `${}em`;
//     loader.style.height = `${}em`;
// },1000)
function getrandom(min, max) {
    let diff = max - min;
    let value = (Math.random() * diff) + min;
    return value;
}