const readline = require("readline");  
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Number: `, (n) => {
    var sum=0;

    for(i=0; i<=n; i++){
     sum = sum + i;
     console.log(sum);
    }
    
    rl.close();
});