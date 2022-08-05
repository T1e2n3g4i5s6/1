
const readline = require('readline');

const rl = readline.createInterface(process.stdin,process.stdout);

rl.question("2 toogoo oruulnuu? ", (e)=>{
    let arr = e.split(" ");
    console.log( math.max(parseInt(arr[0]),parseInt(arr[1])));
    rl.close();
})

// var person1 = new person('2022:07:20', '11:00');
// console.log(math.max(10,123));
