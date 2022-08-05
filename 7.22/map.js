// const readline = require("readline");
// const math = require('./math');     
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// rl.question("given array : ", (array) => {
//     console.log(array.split(" ").map(Number));
// })

// const a = [1, 2, 3, 4];
// const hariu = a.map(x => x * 2);
// // console.log(hariu);
// console.log(hariu);

// const birthDay = [1994, 1997, 2003, 1993, 2001];
// const a = 2022
// const hariu = birthDay.map(x => a - x);
// console.log(hariu);

// let persons = [
//     {id : 1 , Name : "Dorj" , age : 19},
//     {id : 2 , Name : "Bold" , age : 13},
//     {id : 3 , Name : "Baldan" , age : 15},
//     {id : 4 , Name : "Tsetsgee" , age : 20},
//     {id : 5 , Name : "Dulmaa" , age : 23}
// ];
// let age =[];
//     let age1=persons.map((person) => {
//     if(person.age > 18)
//     {
//          age.push(person);
//         // return person.age
//     }
// });

// console.log(age);

let sum =0;
for(let i=0;i<5;i++)
{
    sum+=i;
}
let arr =[1,2,3,4,5];

let arr1=arr.reduce(function nemeh(first,after){

    console.log({first,after});
    return first-after;
     
})
console.log(arr1);