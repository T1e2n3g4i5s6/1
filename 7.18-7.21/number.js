const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question(`Numbers:`, (answer) => {
    let array = answer.split(" ");
    let sum =[];
    array.forEach((el) => {
      sum.push(parseInt(el));
    });

    // console.log(sum)
    
    let sondgoi = 1;
    let tegsh = 0;
    for(let i=0;i<sum.length;i++){
        if(sum[i] % 2 === 0 ){
            tegsh += sum[i]
        }
        else if(sum[i]%2 != 0){
            sondgoi *= sum[i]
        }

    }
    console.log("tegsh: ",tegsh," sondgoi:",  sondgoi)
    rl.close()
    })