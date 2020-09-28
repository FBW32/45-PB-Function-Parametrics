// Bonus: Create a function average which accepts any amount of numbers and returns their mean average.

// The mean average of a set of numbers is calculated by adding them all up and dividing the result of the addition by the amount of numbers in the set
// Example: To calculate the average of 12, 14 and 16 -
// 12 + 14 + 16 = 42
// 42 / 3 = 14

const average = (...input) => {
    let sum = 0;
    let average = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i]

    }
    average = sum / input.length
    return `The average of [${input}] is ${average}!`;
};

console.log(average(0)); // -> 0
console.log(average(1, 2)); // -> 1.5
console.log(average(1, 3, 6, 10)); // -> 5
console.log(average(12, 14, 16)); // -> 14

// The average of [0] is 0!
// The average of [1,2] is 1.5!
// The average of [1,3,6,10] is 5!
// The average of [12,14,16] is 14!
