// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...input) => {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i]
    }
    return `The number/s ${input} equal a sum of ${sum}!`;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70

// The number/s 1 equal a sum of 1!
// The number/s 1,15 equal a sum of 16!
// The number/s 25,25,20 equal a sum of 70!