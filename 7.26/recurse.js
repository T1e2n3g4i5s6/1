// console.log(sum);

// const sum = (n) => {
//     if (n == 0){ return 0;
//     } return n + sum(n - 1);
//   };
//   sum(5);


const readline = require("readline");  
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("number: ",(number) =>{
    let numbernum = parseInt(number);
    console.log(sum(numbernum));
    rl.close();
});

const sum = (n) => {
    if (n == 0){ return 0;
    } return n + sum(n - 1);
  };