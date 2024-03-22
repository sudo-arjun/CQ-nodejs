const process = require('process');
const add = require('./add');
const sub = require('./sub');
const mul = require('./mul')
const div = require('./div')

let [ , , num1, num2, op] = process.argv;
num1 = Number(num1);
num2 = Number(num2);
if(isNaN(num1) || isNaN(num2)){
    console.log("Enter Valid number");
    process.exit(1);
}
let result;
switch(op)
{
    case '+':
    case 'add':
    case 'sum':
        result = add(num1,num2);
        break;
    case '-':
    case 'minus':
    case 'sub':
        result = sub(num1,num2);
        break;
    case '*':
    case 'mul':
    case 'product':
        result = mul(num1,num2);
        break;
    case '/':
    case 'div':
    case 'divide':
        result = div(num1,num2);
        break;
    default:
        console.log(`Enter Valid operation!`);
        process.exit(-1);
}

console.log(`${num1} ${op} ${num2} = ${result}`);