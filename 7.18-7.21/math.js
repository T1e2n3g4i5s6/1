// const PI = 3.14;
// exports.PI = PI;

const readline = require("readline");
const math = require('./math');     
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// rl.question(`Radius: `, (radius) => {
//     console.log(`Ans: `, 2 * math.PI * Number(radius));
//     rl.close();
// })
rl.question(`number:`, (Number) => {
    var too = Number;
    rl.close();
    exports.sqrt = (too) => math.sqrt(too)
    console.log(exports.sqrt);
}); 
