const makePlusFunction = (baseNum) => (newNum) => baseNum+newNum;
// const makeePlusFunction =(baseNum) =>{
//     return (newNum) =>{
//         return newNum + baseNum;
//     }
// }

const plusFive = makeePlusFunction(5);
const plusTen = makeePlusFunction(10);
console.log(plusFive(2));
console.log(plusTen(2));
console.log(plusFive(plusTen(2)));