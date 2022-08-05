var math = require('./chatbot2');
const readline = require('readline');

const rl = readline.createInterface(process.stdin,process.stdout);

rl.question("What's your name?", (Name)=>{
    console.log("Hello", Name, ". My name is NestBot");

    rl.question("Choice date or time?", (time)=>{
        const b = new Date();
        if("date" == time){
            console.log(b.getFullYear - b.getMonth - b.getDay);
        }else{
            console.log(b.getHours - b.getMinutes);
        }
    })
    rl.close();
})