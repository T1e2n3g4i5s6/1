const chalk = require("chalk");
let bgColor = "",
    color = "",
    text = "";

let args = process.argv.slice(2);
let str = args.join("");

if (str.includes("-bg")) {
  let tmp = str.split("-bg")[1].split("-")[0];
  bgColor = "bg" + tmp[0].toUpperCase() + tmp.slice(1).toLowerCase();
}

if (str.includes("-c")) {
  color = str.split("-c")[1].split("-")[0];
}

if (str.includes("-t")) {
  text = str.split("-t")[1].split("-")[0];
}

// console.log(text, color, bgColor)

console.log(chalk [color] (text) [bgColor]);