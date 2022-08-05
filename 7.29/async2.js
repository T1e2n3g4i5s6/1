const isNan = (num) => new Promise(function(resolve, reject){
    setTimeout(() => {
        
        if(num%2!=0){
            resolve('odd number');
        }else{
            reject("error");
        }
    }, 1000);
})

const check = async() => {
    try{
        let response = await isNan(8);
        console.log(response);
    }
    catch (err){
        console.log(err);
    }
}

check();