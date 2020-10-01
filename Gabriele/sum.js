// Create a function sum which accepts any amount of numbers and return the sum of their addition

const { sienna } = require("color-name");

const sum = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
 } return sum;
}

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70


// or


const sum2 = (...args) =>{ 
    let sum2 = 0;
   let numArr = args;
   numArr.map((item) => sum2 += item) ;
    return sum2;
 }


console.log(sum2(1)); // -> 1
console.log(sum2(1, 15)); // -> 16
console.log(sum2(25, 25, 20)); // -> 70

