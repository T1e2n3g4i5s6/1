var willIGetNewPhone = new Promise(function (resolve, reject) {
    let time = Math.round(Math.random() * 7) * 1000;
    setTimeout(() => {
        let isMomHappy = Math.round(Math.random());
        if (isMomHappy) {
            var phone = {
                brand: "iPhone",
                color: "black",
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error("-ger ornoo tsewerl ugend sain orwol bodoj uzy.");
            reject(reason); // reject
        }
    }, time);
});


var askMomCase = new Promise(function (resolve, reject) {
    let time = Math.round(Math.random() * 7) * 1000;
    setTimeout(() => {
        let isMomHappyy = Math.round(Math.random());
        if (isMomHappyy) {
            var Case = {
                color: "blue",
            };
            resolve(Case);
        } else {
            var reasonn = new Error("----odoo bitgii dawrad bai");
            reject(reasonn); // reject
        }
    }, time);
});

//   // call our promise
//   let askMom = () => {
//     return willIGetNewPhone
//       .then((fulfilled) => {
//         // yay, you got a new phone
//         console.log(fulfilled);
//         // output: { brand: ‘Iphone', color: 'black' }
//       })
//       .catch((error) => {
//         // oops, mom don't buy it
//         console.log(error.message);
//         // output: 'mom is not happy'
//       });
//   };
// const askMom = async () => {
//     try {
//       const response = await askMomCase;
//       console.log(response);
//       return response;
//     } catch (error) {
//       console.log(error);
//     }
//   };  

const askMom1 = async () => {
    try {
        console.log("utas awj boloh uu?");
        const response = await willIGetNewPhone;
        console.log("-zza ymr utas awah ym?");
        console.log("--iim utas awna:", response);
        return askCase();
    } catch (error) {
        console.log(error.message);
    }
    return 
};

const askCase = async () => {
    try {
        console.log("---case awj boloh uu?");
        const response = await askMomCase;
        console.log("----zaa aw2 ymr ongotei case awh ym?");
        console.log(response);
        console.log("-----zaa bayrlalaa mommy.");
        return response
    } catch (error) {
        // console.log("-----odoo bitgii dawrad bai");
        console.log(error.message);
        return error.message
    }
};



askMom1()