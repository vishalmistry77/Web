//module.exports in files
const math = require("./math"); // ./ indicates the file is in same folder. so run this file and it will export the the value

console.log(math); //run "node script.js" to see the exported modules
console.log(math.mul(5,5)); //can run multiple pre-defined functions like sum,g and more

//module.exports in directories
const info = require("./Fruits");
console.log(info);
console.log(info[0]);
console.log(info[0].name);

//using import keyword rather than require(try to use any one only require or import at a time in code)

