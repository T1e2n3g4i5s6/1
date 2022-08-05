// let myPromise = new Promise(function(resolve, reject){
//     const data = 10;
//     var integer = Number.isInteger(data); 
//     if(integer==false){
//         resolve(NaN);
//     }
//     else{
//         reject("error");
//     };
// });

const isNan = (num) => new Promise(function(resolve, reject){
    console.log(num);
    if(!isNaN(num)){
        resolve('number');
    }else{
        reject("error");
    }
})

const check = async() => {
    try{
        let response = await isNan('');
        console.log(response);
    }
    catch (err){
        console.log(err);
    }
}

check();

