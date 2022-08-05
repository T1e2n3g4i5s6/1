const readline = require("readline");  
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("number: ",(number) =>{
    let numbernum = parseInt(number);
    console.log(paktral(numbernum));
    rl.close();
});

const paktral = (n) => {
    if(n === 0)
    return 1;
    return n * paktral(n-1);
};
