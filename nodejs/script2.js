//using import keyword rather than require(try to use any one only require or import at a time in code)

import {sum, pi} from "./math2.js";

console.log(sum(5,2));
console.log(pi);

//using another package
import randomWord from 'random-word';
console.log(randomWord());