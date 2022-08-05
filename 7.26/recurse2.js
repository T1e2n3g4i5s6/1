const readline = require("readline");  
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arr = [1, 1];
let sum = 1;

rl.question("number: ",(number) =>{
    let numbernum = parseInt(number);
    console.log(fibonacci(numbernum));
    rl.close();
});

const fibonacci = (sum) => {

}

