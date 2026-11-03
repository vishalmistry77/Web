// const sum = (a,b) => a+b;
// const mul = (a,b) => a*b;
// const g = 9.8;
// const pi = 3.14;

// // module.exports = 123.4;  //this will export to script.js through require()

// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     pi: pi,
// };
// module.exports = obj;
//OR
// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     pi: pi,
// };

//OR (all the things in 4 lines)
module.exports.sum = (a,b) => a+b;
module.exports.mul = (a,b) => a*b;
module.exports.g = 9.8;
module.exports.pi = 3.14;


